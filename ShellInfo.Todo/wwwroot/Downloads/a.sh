#!/bin/bash
VERSION="1.3"

#########################################################################################
#       V1.0         First Upload		18/11/2018       -     Srinivas Gattu   #
#       V1.1         Changed to fortnight	18/11/2018       -     Srinivas Gattu   #
#       V1.2         IP Address Changed		25/11/2018       -     Srinivas Gattu   #
#       V1.3         Back to 4 WEEKS Schedule	25/11/2018       -     Srinivas Gattu   #
#########################################################################################
logger "Running a.sh VERSION:$VERSION"

kill_app()
{
   ps |grep pds_gl11|grep -v grep |awk '{print $1}'|xargs kill -1
}

upload()
{
   kill_app
   logger -s " In Upload() function...."

   PASSWORD=$(cat /home/pdsuser/dbKey.txt)
   echo "PWD from file: $PASSWORD"
   if [ "$PASSWORD" == "" ]; then                                                              
            PASSWORD="odisha@123";
   fi                                                                                
   echo "Final PWD after if:  $PASSWORD"
   logger -s "Final PWD after if:  $PASSWORD"

sqlcipher /home/pdsuser/fps.sqlite <<- !
PRAGMA key='$PASSWORD';                                                        
PRAGMA cipher_use_hmac=OFF; 

 DELETE FROM WEEK_INFO WHERE ALLOTMENT_MONTH > '2018-10-01';
 INSERT INTO WEEK_INFO(ALLOTMENT_MONTH, WEEK_START, WEEK_END, WEEK_NO, IS_DRY_WEEK) VALUES('2019-01-01', '2019-01-01', '2019-01-06', 1, 'No');
 INSERT INTO WEEK_INFO(ALLOTMENT_MONTH, WEEK_START, WEEK_END, WEEK_NO, IS_DRY_WEEK) VALUES('2019-01-01', '2019-01-07', '2019-01-13', 2, 'No');
 INSERT INTO WEEK_INFO(ALLOTMENT_MONTH, WEEK_START, WEEK_END, WEEK_NO, IS_DRY_WEEK) VALUES('2019-01-01', '2019-01-14', '2019-01-20', 3, 'No');
 INSERT INTO WEEK_INFO(ALLOTMENT_MONTH, WEEK_START, WEEK_END, WEEK_NO, IS_DRY_WEEK) VALUES('2019-01-01', '2019-01-20', '2019-01-31', 4, 'No');

.o /tmp/retailer_id
select value from properties where key='office_id';
.o /home/pdsuser/fps.sql
.dump
.q
!

   logger -s "****************** UPLOAD FINISHED ***************"

   FILE="/tmp/wbpds_$(date +%Y%m%d%H%M%S)_$(cat /tmp/retailer_id).tar.gz"

   tar -cvzf "$FILE"  /home/pdsuser/fps.sql /home/pdsuser/pds.log*

   curl -v -F BtnUpload=Upload -F files=@"$FILE" -F userid=admin-5385 -F password=Admin@1234 -X POST http://192.168.1.5:4900/UploadFiles/
}

check_already_running()
{
   logger -s "Current PID: $$"
   for pid in $(pidof a.sh); do
       echo "Pid: $pid"
       if [ "$pid" != "$$" ]; then
      logger -s "Another process running with Pid: $pid. Exiting."
      exit 1
       fi
   done
}

check_already_running
kill_app
upload
/vision/buzz_on
#reboot


