$(document).ready(function () {
    BlockMasterSummaryList('');
});
function BlockMasterSummaryList() {
    $("#jqGrid").jqGrid('GridUnload');
    $("#jqGrid").jqGrid(
        {
            url: '/api/BlockMastersController/BlockMastersGridView/excel',
            mtype: 'GET',
            datatype: 'json',
            height: 'auto',
            colModel: [
                { label: 'District Code', name: 'distCode', width: 150, align: 'center' },
                { label: 'District', name: 'distName', width: 170, align: 'center' },
                { label: 'Block Code', name: 'blockCode', width: 150, align: 'center' },
                { label: 'Block', name: 'blockName', width: 250, align:'center' },                                              
            ],
            loadonce: false,
            pager: '#jqGridPager',
            caption: 'Block Master',
            rowNum: 10,
            rowList: [10, 20, 50, 500, 1000],
            emptyrecords: "Empty Records",
            viewrecords: true           
        });

    $("#jqGrid").jqGrid('navGrid', '#jqGridPager', { edit: false, add: false, del: false }
        , {}, {}, {}, {
            multipleSearch: true,
            multipleGroup: true,
            sopt: ['eq', 'ne', 'cn'],
            closeAfterSearch: true,
            closeAfterReset: true,
            onClose: function () {
                return true;
            }
        }).navButtonAdd('#jqGridPager', {
            caption: "Export to Excel",
            buttonicon: "ui-icon-disk",
            onClickButton: function () {
               // console.log("search filter:" + $.param(searchDetails) + ", jqgrid params:" + $.param($("#jqGrid").getGridParam("postData")));
                window.location = '/api/BlockMastersController/BlockMastersGridView/Excel' + '?' + $.param($("#jqGrid").getGridParam("postData"));
            },
            position: "last"
        });
}