/* eslint-disable object-shorthand */

/* global Chart, CustomTooltips, getStyle, hexToRgba */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.0.0): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
// Disable the on-canvas tooltip
Chart.defaults.global.pointHitDetectionRadius = 1;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.tooltips.mode = 'index';
Chart.defaults.global.tooltips.position = 'nearest';
Chart.defaults.global.tooltips.custom = CustomTooltips; // eslint-disable-next-line no-unused-vars
Chart.plugins.unregister(ChartDataLabels);
Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
    color: '#555'
});

var chartData;

var offtakeData = [{ "id": 1, "geography": "DCFS-ALIPURDUAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 23750.200000000000, "allocationQuantity": 23784.544, "offtakePercentage": 0.0, "consumed": 1998.0000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 2, "geography": "DCFS-ALIPURDUAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 20344.860000000000, "allocationQuantity": 20342.163, "offtakePercentage": 0.0, "consumed": 2420.8500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 3, "geography": "DCFS-ALIPURDUAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 17812.650000000000, "allocationQuantity": 17838.402, "offtakePercentage": 0.0, "consumed": 1525.6875000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 4, "geography": "DCFS-ALIPURDUAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 13563.240000000000, "allocationQuantity": 13561.447, "offtakePercentage": 0.0, "consumed": 1619.0350000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 5, "geography": "DCFS-ALIPURDUAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 5937.3000000000000000, "allocationQuantity": 5949.596, "offtakePercentage": 0.0, "consumed": 683.5950000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 6, "geography": "DCFS-ALIPURDUAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 1682.6300000000000000, "allocationQuantity": 1682.736, "offtakePercentage": 0.0, "consumed": 199.0900000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 7, "geography": "DCFS-ALIPURDUAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 8905.9500000000000000, "allocationQuantity": 8924.397, "offtakePercentage": 0.0, "consumed": 1022.6250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 8, "geography": "DCFS-ALIPURDUAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 1682.6300000000000000, "allocationQuantity": 1682.736, "offtakePercentage": 0.0, "consumed": 198.3875000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 9, "geography": "DCFS-BANKURA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 16002.600000000000, "allocationQuantity": 16024.343, "offtakePercentage": 0.0, "consumed": 594.7000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 10, "geography": "DCFS-BANKURA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 63593.460000000000, "allocationQuantity": 63584.564, "offtakePercentage": 0.0, "consumed": 2406.9000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 11, "geography": "DCFS-BANKURA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 12001.950000000000, "allocationQuantity": 12018.266, "offtakePercentage": 0.0, "consumed": 482.3250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 12, "geography": "DCFS-BANKURA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 42395.640000000000, "allocationQuantity": 42389.730, "offtakePercentage": 0.0, "consumed": 1701.5550000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 13, "geography": "DCFS-BANKURA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 14112.700000000000, "allocationQuantity": 14276.757, "offtakePercentage": 0.0, "consumed": 551.1550000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 14, "geography": "DCFS-BANKURA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 5155.1800000000000000, "allocationQuantity": 5182.158, "offtakePercentage": 0.0, "consumed": 148.4575000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 15, "geography": "DCFS-BANKURA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 21169.050000000000, "allocationQuantity": 21415.133, "offtakePercentage": 0.0, "consumed": 825.9525000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 16, "geography": "DCFS-BANKURA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 5155.1800000000000000, "allocationQuantity": 5182.158, "offtakePercentage": 0.0, "consumed": 148.4925000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 17, "geography": "DCFS-BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 19677.800000000000, "allocationQuantity": 19699.038, "offtakePercentage": 0.0, "consumed": 120.7000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 18, "geography": "DCFS-BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 91821.030000000000, "allocationQuantity": 91805.992, "offtakePercentage": 0.0, "consumed": 480.3300000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 19, "geography": "DCFS-BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 14758.350000000000, "allocationQuantity": 14774.296, "offtakePercentage": 0.0, "consumed": 92.0250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 20, "geography": "DCFS-BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 61214.020000000000, "allocationQuantity": 61203.998, "offtakePercentage": 0.0, "consumed": 320.8100000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 21, "geography": "DCFS-BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 17454.120000000000, "allocationQuantity": 17626.037, "offtakePercentage": 0.0, "consumed": 109.9800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 22, "geography": "DCFS-BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 8276.4800000000000000, "allocationQuantity": 8280.075, "offtakePercentage": 0.0, "consumed": 27.4675000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 23, "geography": "DCFS-BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 26181.180000000000, "allocationQuantity": 26439.059, "offtakePercentage": 0.0, "consumed": 164.9850000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 24, "geography": "DCFS-BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 8276.4800000000000000, "allocationQuantity": 8280.075, "offtakePercentage": 0.0, "consumed": 27.4675000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 25, "geography": "DCFS-BIRBHUM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 23685.400000000000, "allocationQuantity": 23718.046, "offtakePercentage": 0.0, "consumed": 995.2000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 26, "geography": "DCFS-BIRBHUM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 68938.020000000000, "allocationQuantity": 68931.581, "offtakePercentage": 0.0, "consumed": 2185.3200000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 27, "geography": "DCFS-BIRBHUM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 17764.050000000000, "allocationQuantity": 17788.529, "offtakePercentage": 0.0, "consumed": 1357.6875000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 28, "geography": "DCFS-BIRBHUM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 45958.680000000000, "allocationQuantity": 45954.384, "offtakePercentage": 0.0, "consumed": 2524.5850000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 29, "geography": "DCFS-BIRBHUM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 12508.160000000000, "allocationQuantity": 12540.544, "offtakePercentage": 0.0, "consumed": 916.1250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 30, "geography": "DCFS-BIRBHUM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 4988.8000000000000000, "allocationQuantity": 4989.676, "offtakePercentage": 0.0, "consumed": 299.9975000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 31, "geography": "DCFS-BIRBHUM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 18762.240000000000, "allocationQuantity": 18810.800, "offtakePercentage": 0.0, "consumed": 1372.0125000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 32, "geography": "DCFS-BIRBHUM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 4988.8000000000000000, "allocationQuantity": 4989.676, "offtakePercentage": 0.0, "consumed": 300.5075000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 33, "geography": "DCFS-COOCH BEHAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 7253.4000000000000000, "allocationQuantity": 7263.489, "offtakePercentage": 0.0, "consumed": 1744.5500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 34, "geography": "DCFS-COOCH BEHAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 61846.410000000000, "allocationQuantity": 61837.846, "offtakePercentage": 0.0, "consumed": 14202.772500000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 35, "geography": "DCFS-COOCH BEHAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 5440.0500000000000000, "allocationQuantity": 5447.623, "offtakePercentage": 0.0, "consumed": 1341.8250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 36, "geography": "DCFS-COOCH BEHAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 41230.940000000000, "allocationQuantity": 41225.237, "offtakePercentage": 0.0, "consumed": 9525.1500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 37, "geography": "DCFS-COOCH BEHAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 8269.5600000000000000, "allocationQuantity": 8300.167, "offtakePercentage": 0.0, "consumed": 2016.6450000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 38, "geography": "DCFS-COOCH BEHAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 3391.0000000000000000, "allocationQuantity": 3391.478, "offtakePercentage": 0.0, "consumed": 664.9475000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 39, "geography": "DCFS-COOCH BEHAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 12404.340000000000, "allocationQuantity": 12450.240, "offtakePercentage": 0.0, "consumed": 3023.6775000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 40, "geography": "DCFS-COOCH BEHAR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 3391.0000000000000000, "allocationQuantity": 3391.478, "offtakePercentage": 0.0, "consumed": 664.0975000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 41, "geography": "DCFS-DAKSHIN DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 4243.2000000000000000, "allocationQuantity": 4249.339, "offtakePercentage": 0.0, "consumed": 29.9000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 42, "geography": "DCFS-DAKSHIN DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 35057.130000000000, "allocationQuantity": 35052.430, "offtakePercentage": 0.0, "consumed": 210.7950000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 43, "geography": "DCFS-DAKSHIN DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 3182.4000000000000000, "allocationQuantity": 3187.006, "offtakePercentage": 0.0, "consumed": 411.0750000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 44, "geography": "DCFS-DAKSHIN DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 23371.420000000000, "allocationQuantity": 23368.292, "offtakePercentage": 0.0, "consumed": 2546.6600000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 45, "geography": "DCFS-DAKSHIN DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 3917.8600000000000000, "allocationQuantity": 3971.534, "offtakePercentage": 0.0, "consumed": 529.7600000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 46, "geography": "DCFS-DAKSHIN DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 1541.2300000000000000, "allocationQuantity": 1541.666, "offtakePercentage": 0.0, "consumed": 202.7375000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 47, "geography": "DCFS-DAKSHIN DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 5876.7900000000000000, "allocationQuantity": 5957.301, "offtakePercentage": 0.0, "consumed": 788.5650000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 48, "geography": "DCFS-DAKSHIN DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 1541.2300000000000000, "allocationQuantity": 1541.666, "offtakePercentage": 0.0, "consumed": 203.6150000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 49, "geography": "DCFS-DARJEELING", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 43413.800000000000, "allocationQuantity": 29739.535, "offtakePercentage": 0.0, "consumed": 6042.0875000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 50, "geography": "DCFS-DARJEELING", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 16533.270000000000, "allocationQuantity": 16531.058, "offtakePercentage": 0.0, "consumed": 2959.3950000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 51, "geography": "DCFS-DARJEELING", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 51030.510000000000, "allocationQuantity": 22304.635, "offtakePercentage": 0.0, "consumed": 7103.6850000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 52, "geography": "DCFS-DARJEELING", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 11022.180000000000, "allocationQuantity": 11020.701, "offtakePercentage": 0.0, "consumed": 1974.7500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 53, "geography": "DCFS-DARJEELING", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 2395.7000000000000000, "allocationQuantity": 2398.059, "offtakePercentage": 0.0, "consumed": 424.6100000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 54, "geography": "DCFS-DARJEELING", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 1849.5000000000000000, "allocationQuantity": 1849.157, "offtakePercentage": 0.0, "consumed": 219.3300000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 55, "geography": "DCFS-DARJEELING", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 3593.5500000000000000, "allocationQuantity": 3597.092, "offtakePercentage": 0.0, "consumed": 637.2150000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 56, "geography": "DCFS-DARJEELING", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 1849.5000000000000000, "allocationQuantity": 1849.157, "offtakePercentage": 0.0, "consumed": 219.3350000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 57, "geography": "DCFS-HOOGHLY", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 11116.000000000000, "allocationQuantity": 11052.147, "offtakePercentage": 0.0, "consumed": 708.7000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 58, "geography": "DCFS-HOOGHLY", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 70328.160000000000, "allocationQuantity": 69643.569, "offtakePercentage": 0.0, "consumed": 3297.7725000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 59, "geography": "DCFS-HOOGHLY", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 8337.0000000000000000, "allocationQuantity": 8289.113, "offtakePercentage": 0.0, "consumed": 629.4375000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 60, "geography": "DCFS-HOOGHLY", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 46885.440000000000, "allocationQuantity": 46429.056, "offtakePercentage": 0.0, "consumed": 2661.9150000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 61, "geography": "DCFS-HOOGHLY", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 18493.700000000000, "allocationQuantity": 18436.224, "offtakePercentage": 0.0, "consumed": 1523.8800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 62, "geography": "DCFS-HOOGHLY", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 11631.320000000000, "allocationQuantity": 11558.012, "offtakePercentage": 0.0, "consumed": 675.2475000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 63, "geography": "DCFS-HOOGHLY", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 27740.550000000000, "allocationQuantity": 27654.318, "offtakePercentage": 0.0, "consumed": 1867.5000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 64, "geography": "DCFS-HOOGHLY", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 11631.320000000000, "allocationQuantity": 11558.012, "offtakePercentage": 0.0, "consumed": 552.5975000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 65, "geography": "DCFS-HOWRAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 4927.2000000000000000, "allocationQuantity": 4928.699, "offtakePercentage": 0.0, "consumed": 179.9000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 66, "geography": "DCFS-HOWRAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 65088.060000000000, "allocationQuantity": 64899.507, "offtakePercentage": 0.0, "consumed": 2378.2800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 67, "geography": "DCFS-HOWRAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 3695.4000000000000000, "allocationQuantity": 3696.534, "offtakePercentage": 0.0, "consumed": 156.2250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 68, "geography": "DCFS-HOWRAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 43392.040000000000, "allocationQuantity": 43266.330, "offtakePercentage": 0.0, "consumed": 1623.1500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 69, "geography": "DCFS-HOWRAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 10318.100000000000, "allocationQuantity": 10425.657, "offtakePercentage": 0.0, "consumed": 253.7400000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 70, "geography": "DCFS-HOWRAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 7697.5400000000000000, "allocationQuantity": 7689.398, "offtakePercentage": 0.0, "consumed": 172.8550000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 71, "geography": "DCFS-HOWRAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 15477.150000000000, "allocationQuantity": 15638.471, "offtakePercentage": 0.0, "consumed": 380.6400000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 72, "geography": "DCFS-HOWRAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 7697.5400000000000000, "allocationQuantity": 7689.398, "offtakePercentage": 0.0, "consumed": 172.8550000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 73, "geography": "DCFS-JALPAIGURI", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 24930.000000000000, "allocationQuantity": 24962.631, "offtakePercentage": 0.0, "consumed": 108.0000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 74, "geography": "DCFS-JALPAIGURI", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 38018.490000000000, "allocationQuantity": 38013.422, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 75, "geography": "DCFS-JALPAIGURI", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 18697.500000000000, "allocationQuantity": 18721.971, "offtakePercentage": 0.0, "consumed": 81.0000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 76, "geography": "DCFS-JALPAIGURI", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 25345.660000000000, "allocationQuantity": 25342.282, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 77, "geography": "DCFS-JALPAIGURI", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 6891.4000000000000000, "allocationQuantity": 6897.101, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 78, "geography": "DCFS-JALPAIGURI", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 2233.3800000000000000, "allocationQuantity": 2233.593, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 79, "geography": "DCFS-JALPAIGURI", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 10337.100000000000, "allocationQuantity": 10345.649, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 80, "geography": "DCFS-JALPAIGURI", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 2233.3800000000000000, "allocationQuantity": 2233.593, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 81, "geography": "DCFS-JHARGRAM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 6506.6000000000000000, "allocationQuantity": 6516.019, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 82, "geography": "DCFS-JHARGRAM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 22405.200000000000, "allocationQuantity": 22402.194, "offtakePercentage": 0.0, "consumed": 0.60000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 83, "geography": "DCFS-JHARGRAM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 4879.9500000000000000, "allocationQuantity": 4887.004, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 84, "geography": "DCFS-JHARGRAM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 14936.800000000000, "allocationQuantity": 14934.792, "offtakePercentage": 0.0, "consumed": 0.40000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 85, "geography": "DCFS-JHARGRAM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 2035.1600000000000000, "allocationQuantity": 2035.701, "offtakePercentage": 0.0, "consumed": 0.26000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 86, "geography": "DCFS-JHARGRAM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 702.8000000000000000, "allocationQuantity": 702.814, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 87, "geography": "DCFS-JHARGRAM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 3052.7400000000000000, "allocationQuantity": 3053.558, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 88, "geography": "DCFS-JHARGRAM", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 702.8000000000000000, "allocationQuantity": 702.814, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 89, "geography": "DCFS-MALDAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 13926.600000000000, "allocationQuantity": 13946.746, "offtakePercentage": 0.0, "consumed": 63.8500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 90, "geography": "DCFS-MALDAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 86416.170000000000, "allocationQuantity": 86404.591, "offtakePercentage": 0.0, "consumed": 260.3700000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 91, "geography": "DCFS-MALDAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 10444.950000000000, "allocationQuantity": 10460.055, "offtakePercentage": 0.0, "consumed": 60.7875000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 92, "geography": "DCFS-MALDAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 57610.780000000000, "allocationQuantity": 57603.053, "offtakePercentage": 0.0, "consumed": 176.0800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 93, "geography": "DCFS-MALDAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 22977.520000000000, "allocationQuantity": 23203.364, "offtakePercentage": 0.0, "consumed": 53.6800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 94, "geography": "DCFS-MALDAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 6640.8900000000000000, "allocationQuantity": 6644.621, "offtakePercentage": 0.0, "consumed": 11.3800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 95, "geography": "DCFS-MALDAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 34466.280000000000, "allocationQuantity": 34805.039, "offtakePercentage": 0.0, "consumed": 83.1450000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 96, "geography": "DCFS-MALDAH", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 6640.8900000000000000, "allocationQuantity": 6644.621, "offtakePercentage": 0.0, "consumed": 12.2550000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 97, "geography": "DCFS-MURSHIDABAD", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 23010.000000000000, "allocationQuantity": 23041.856, "offtakePercentage": 0.0, "consumed": 1.6000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 98, "geography": "DCFS-MURSHIDABAD", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 166026.630000000000, "allocationQuantity": 166004.013, "offtakePercentage": 0.0, "consumed": 1.6050000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 99, "geography": "DCFS-MURSHIDABAD", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 17257.500000000000, "allocationQuantity": 17281.403, "offtakePercentage": 0.0, "consumed": 140.0625000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 100, "geography": "DCFS-MURSHIDABAD", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 110684.420000000000, "allocationQuantity": 110669.380, "offtakePercentage": 0.0, "consumed": 566.4300000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 101, "geography": "DCFS-MURSHIDABAD", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 28502.060000000000, "allocationQuantity": 28651.598, "offtakePercentage": 0.0, "consumed": 217.1300000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 102, "geography": "DCFS-MURSHIDABAD", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 6752.2900000000000000, "allocationQuantity": 6754.229, "offtakePercentage": 0.0, "consumed": 36.4150000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 103, "geography": "DCFS-MURSHIDABAD", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 42753.090000000000, "allocationQuantity": 42977.379, "offtakePercentage": 0.0, "consumed": 336.6750000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 104, "geography": "DCFS-MURSHIDABAD", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 6752.2900000000000000, "allocationQuantity": 6754.229, "offtakePercentage": 0.0, "consumed": 37.7350000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 105, "geography": "DCFS-NADIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 12776.800000000000, "allocationQuantity": 12793.845, "offtakePercentage": 0.0, "consumed": 2.2000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 106, "geography": "DCFS-NADIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 102431.310000000000, "allocationQuantity": 102432.898, "offtakePercentage": 0.0, "consumed": 5.3100000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 107, "geography": "DCFS-NADIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 9582.6000000000000000, "allocationQuantity": 9595.407, "offtakePercentage": 0.0, "consumed": 1.7250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 108, "geography": "DCFS-NADIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 68287.540000000000, "allocationQuantity": 68288.596, "offtakePercentage": 0.0, "consumed": 3.5600000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 109, "geography": "DCFS-NADIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 17009.840000000000, "allocationQuantity": 17115.652, "offtakePercentage": 0.0, "consumed": 14.7600000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 110, "geography": "DCFS-NADIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 9598.2600000000000000, "allocationQuantity": 9600.522, "offtakePercentage": 0.0, "consumed": 7.6900000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 111, "geography": "DCFS-NADIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 25514.760000000000, "allocationQuantity": 25673.476, "offtakePercentage": 0.0, "consumed": 22.1400000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 112, "geography": "DCFS-NADIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 9598.2600000000000000, "allocationQuantity": 9600.522, "offtakePercentage": 0.0, "consumed": 7.6900000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 113, "geography": "DCFS-NORTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 15846.600000000000, "allocationQuantity": 15763.953, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 114, "geography": "DCFS-NORTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 129242.100000000000, "allocationQuantity": 128911.055, "offtakePercentage": 0.0, "consumed": 0.00000000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 115, "geography": "DCFS-NORTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 11884.950000000000, "allocationQuantity": 11822.956, "offtakePercentage": 0.0, "consumed": 14.4000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 116, "geography": "DCFS-NORTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 86161.400000000000, "allocationQuantity": 85940.704, "offtakePercentage": 0.0, "consumed": 94.7000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 117, "geography": "DCFS-NORTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 22875.980000000000, "allocationQuantity": 22943.891, "offtakePercentage": 0.0, "consumed": 146.2200000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 118, "geography": "DCFS-NORTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 10155.330000000000, "allocationQuantity": 10158.697, "offtakePercentage": 0.0, "consumed": 23.7250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 119, "geography": "DCFS-NORTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 34313.970000000000, "allocationQuantity": 34415.858, "offtakePercentage": 0.0, "consumed": 219.1500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 120, "geography": "DCFS-NORTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 10155.330000000000, "allocationQuantity": 10158.697, "offtakePercentage": 0.0, "consumed": 19.0900000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 121, "geography": "DCFS-PASCHIM BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 4507.0000000000000000, "allocationQuantity": 4513.303, "offtakePercentage": 0.0, "consumed": 27.5000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 122, "geography": "DCFS-PASCHIM BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 27041.880000000000, "allocationQuantity": 27038.798, "offtakePercentage": 0.0, "consumed": 147.0600000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 123, "geography": "DCFS-PASCHIM BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 3380.2500000000000000, "allocationQuantity": 3384.982, "offtakePercentage": 0.0, "consumed": 27.6000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 124, "geography": "DCFS-PASCHIM BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 18027.920000000000, "allocationQuantity": 18025.862, "offtakePercentage": 0.0, "consumed": 113.7800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 125, "geography": "DCFS-PASCHIM BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 8605.3000000000000000, "allocationQuantity": 8636.840, "offtakePercentage": 0.0, "consumed": 207.4800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 126, "geography": "DCFS-PASCHIM BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 4782.5500000000000000, "allocationQuantity": 4783.627, "offtakePercentage": 0.0, "consumed": 59.8200000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 127, "geography": "DCFS-PASCHIM BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 12907.950000000000, "allocationQuantity": 12955.279, "offtakePercentage": 0.0, "consumed": 310.7700000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 128, "geography": "DCFS-PASCHIM BARDHAMAN", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 4782.5500000000000000, "allocationQuantity": 4783.627, "offtakePercentage": 0.0, "consumed": 59.8100000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 129, "geography": "DCFS-PASCHIM MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 16987.200000000000, "allocationQuantity": 17009.956, "offtakePercentage": 0.0, "consumed": 706.1500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 130, "geography": "DCFS-PASCHIM MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 84961.470000000000, "allocationQuantity": 84950.052, "offtakePercentage": 0.0, "consumed": 3863.9850000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 131, "geography": "DCFS-PASCHIM MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 12740.400000000000, "allocationQuantity": 12757.464, "offtakePercentage": 0.0, "consumed": 733.8750000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 132, "geography": "DCFS-PASCHIM MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 56640.980000000000, "allocationQuantity": 56633.368, "offtakePercentage": 0.0, "consumed": 2727.4600000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 133, "geography": "DCFS-PASCHIM MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 24223.900000000000, "allocationQuantity": 24281.383, "offtakePercentage": 0.0, "consumed": 1906.9800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 134, "geography": "DCFS-PASCHIM MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 7701.1900000000000000, "allocationQuantity": 7701.996, "offtakePercentage": 0.0, "consumed": 356.8625000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 135, "geography": "DCFS-PASCHIM MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 36335.850000000000, "allocationQuantity": 36422.098, "offtakePercentage": 0.0, "consumed": 2735.0625000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 136, "geography": "DCFS-PASCHIM MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 7701.1900000000000000, "allocationQuantity": 7701.996, "offtakePercentage": 0.0, "consumed": 356.8875000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 137, "geography": "DCFS-PURBA MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 9521.4000000000000000, "allocationQuantity": 9495.311, "offtakePercentage": 0.0, "consumed": 69.8000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 138, "geography": "DCFS-PURBA MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 106316.040000000000, "allocationQuantity": 105715.396, "offtakePercentage": 0.0, "consumed": 656.5200000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 139, "geography": "DCFS-PURBA MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 7141.0500000000000000, "allocationQuantity": 7121.478, "offtakePercentage": 0.0, "consumed": 98.8500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 140, "geography": "DCFS-PURBA MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 70877.360000000000, "allocationQuantity": 70476.926, "offtakePercentage": 0.0, "consumed": 761.6000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 141, "geography": "DCFS-PURBA MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 23532.980000000000, "allocationQuantity": 23516.690, "offtakePercentage": 0.0, "consumed": 323.8700000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 142, "geography": "DCFS-PURBA MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 6061.2300000000000000, "allocationQuantity": 6043.126, "offtakePercentage": 0.0, "consumed": 53.3700000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 143, "geography": "DCFS-PURBA MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 35299.470000000000, "allocationQuantity": 35275.022, "offtakePercentage": 0.0, "consumed": 446.6700000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 144, "geography": "DCFS-PURBA MIDNAPORE", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 6061.2300000000000000, "allocationQuantity": 6043.126, "offtakePercentage": 0.0, "consumed": 49.6700000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 145, "geography": "DCFS-PURULIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 10700.000000000000, "allocationQuantity": 10715.463, "offtakePercentage": 0.0, "consumed": 787.0500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 146, "geography": "DCFS-PURULIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 56882.940000000000, "allocationQuantity": 56875.302, "offtakePercentage": 0.0, "consumed": 3291.1050000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 147, "geography": "DCFS-PURULIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 8025.0000000000000000, "allocationQuantity": 8036.608, "offtakePercentage": 0.0, "consumed": 595.4250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 148, "geography": "DCFS-PURULIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 37921.960000000000, "allocationQuantity": 37916.868, "offtakePercentage": 0.0, "consumed": 2186.5050000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 149, "geography": "DCFS-PURULIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 13984.060000000000, "allocationQuantity": 14310.698, "offtakePercentage": 0.0, "consumed": 318.4650000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 150, "geography": "DCFS-PURULIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 3306.7500000000000000, "allocationQuantity": 3308.276, "offtakePercentage": 0.0, "consumed": 104.4800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 151, "geography": "DCFS-PURULIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 20976.090000000000, "allocationQuantity": 21466.062, "offtakePercentage": 0.0, "consumed": 898.3500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 152, "geography": "DCFS-PURULIA", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 3306.7500000000000000, "allocationQuantity": 3308.276, "offtakePercentage": 0.0, "consumed": 122.8700000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 153, "geography": "DCFS-SOUTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 17433.600000000000, "allocationQuantity": 17451.198, "offtakePercentage": 0.0, "consumed": 50.4000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 154, "geography": "DCFS-SOUTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 168870.660000000000, "allocationQuantity": 168847.705, "offtakePercentage": 0.0, "consumed": 90.6450000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 155, "geography": "DCFS-SOUTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 13075.200000000000, "allocationQuantity": 13088.392, "offtakePercentage": 0.0, "consumed": 128.8875000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 156, "geography": "DCFS-SOUTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 112580.440000000000, "allocationQuantity": 112565.158, "offtakePercentage": 0.0, "consumed": 504.2850000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 157, "geography": "DCFS-SOUTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 29000.520000000000, "allocationQuantity": 29289.968, "offtakePercentage": 0.0, "consumed": 323.4800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 158, "geography": "DCFS-SOUTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 12667.520000000000, "allocationQuantity": 12670.468, "offtakePercentage": 0.0, "consumed": 58.7525000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 159, "geography": "DCFS-SOUTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 43500.780000000000, "allocationQuantity": 43934.972, "offtakePercentage": 0.0, "consumed": 470.6850000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 160, "geography": "DCFS-SOUTH TWENTY FOUR PARGANAS", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 12667.520000000000, "allocationQuantity": 12670.468, "offtakePercentage": 0.0, "consumed": 52.7625000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 161, "geography": "DCFS-UTTAR DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 6082.6000000000000000, "allocationQuantity": 6091.196, "offtakePercentage": 0.0, "consumed": 23.4000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 162, "geography": "DCFS-UTTAR DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 65496.630000000000, "allocationQuantity": 65487.854, "offtakePercentage": 0.0, "consumed": 19.0200000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 163, "geography": "DCFS-UTTAR DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 4561.9500000000000000, "allocationQuantity": 4568.395, "offtakePercentage": 0.0, "consumed": 17.4000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 164, "geography": "DCFS-UTTAR DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 43664.420000000000, "allocationQuantity": 43658.572, "offtakePercentage": 0.0, "consumed": 12.6800000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 165, "geography": "DCFS-UTTAR DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 9441.2400000000000000, "allocationQuantity": 9496.292, "offtakePercentage": 0.0, "consumed": 18.0600000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 166, "geography": "DCFS-UTTAR DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 3861.0600000000000000, "allocationQuantity": 3861.644, "offtakePercentage": 0.0, "consumed": 4.6900000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 167, "geography": "DCFS-UTTAR DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 14161.860000000000, "allocationQuantity": 14244.427, "offtakePercentage": 0.0, "consumed": 27.0900000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 168, "geography": "DCFS-UTTAR DINAJPUR", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 3861.0600000000000000, "allocationQuantity": 3861.644, "offtakePercentage": 0.0, "consumed": 4.6900000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 169, "geography": "DDR-Asansol", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 1156.8000000000000000, "allocationQuantity": 1153.009, "offtakePercentage": 0.0, "consumed": 168.3500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 170, "geography": "DDR-Asansol", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 8107.4100000000000000, "allocationQuantity": 8089.409, "offtakePercentage": 0.0, "consumed": 1179.0525000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 171, "geography": "DDR-Asansol", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 867.6000000000000000, "allocationQuantity": 864.764, "offtakePercentage": 0.0, "consumed": 124.9125000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 172, "geography": "DDR-Asansol", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 5404.9400000000000000, "allocationQuantity": 5392.930, "offtakePercentage": 0.0, "consumed": 802.3750000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 173, "geography": "DDR-Asansol", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 3561.3200000000000000, "allocationQuantity": 3570.120, "offtakePercentage": 0.0, "consumed": 564.0150000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 174, "geography": "DDR-Asansol", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 2521.1500000000000000, "allocationQuantity": 2521.420, "offtakePercentage": 0.0, "consumed": 186.3700000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 175, "geography": "DDR-Asansol", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 5341.9800000000000000, "allocationQuantity": 5355.180, "offtakePercentage": 0.0, "consumed": 847.0575000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 176, "geography": "DDR-Asansol", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 2521.1500000000000000, "allocationQuantity": 2521.420, "offtakePercentage": 0.0, "consumed": 186.5700000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 177, "geography": "DDR-Barrackpore", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 4454.0000000000000000, "allocationQuantity": 4438.800, "offtakePercentage": 0.0, "consumed": 657.8500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 178, "geography": "DDR-Barrackpore", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 26122.110000000000, "allocationQuantity": 26064.208, "offtakePercentage": 0.0, "consumed": 4025.3175000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 179, "geography": "DDR-Barrackpore", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 3340.5000000000000000, "allocationQuantity": 3329.111, "offtakePercentage": 0.0, "consumed": 493.2750000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 180, "geography": "DDR-Barrackpore", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 17414.740000000000, "allocationQuantity": 17376.118, "offtakePercentage": 0.0, "consumed": 2684.9850000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 181, "geography": "DDR-Barrackpore", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 5503.2000000000000000, "allocationQuantity": 5578.200, "offtakePercentage": 0.0, "consumed": 671.7250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 182, "geography": "DDR-Barrackpore", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 6858.7200000000000000, "allocationQuantity": 6879.360, "offtakePercentage": 0.0, "consumed": 493.5325000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 183, "geography": "DDR-Barrackpore", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 8254.8000000000000000, "allocationQuantity": 8367.300, "offtakePercentage": 0.0, "consumed": 1006.1175000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 184, "geography": "DDR-Barrackpore", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 6858.7200000000000000, "allocationQuantity": 6879.360, "offtakePercentage": 0.0, "consumed": 493.0825000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 185, "geography": "DDR-Hoogly", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 3324.2000000000000000, "allocationQuantity": 3312.697, "offtakePercentage": 0.0, "consumed": 380.8500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 186, "geography": "DDR-Hoogly", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 16444.470000000000, "allocationQuantity": 16408.677, "offtakePercentage": 0.0, "consumed": 1890.6225000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 187, "geography": "DDR-Hoogly", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 2493.1500000000000000, "allocationQuantity": 2484.528, "offtakePercentage": 0.0, "consumed": 284.9625000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 188, "geography": "DDR-Hoogly", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 10962.980000000000, "allocationQuantity": 10939.104, "offtakePercentage": 0.0, "consumed": 1261.0450000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 189, "geography": "DDR-Hoogly", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 4899.0000000000000000, "allocationQuantity": 4917.240, "offtakePercentage": 0.0, "consumed": 402.8850000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 190, "geography": "DDR-Hoogly", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 2522.5200000000000000, "allocationQuantity": 2523.050, "offtakePercentage": 0.0, "consumed": 88.2050000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 191, "geography": "DDR-Hoogly", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 7348.5000000000000000, "allocationQuantity": 7375.860, "offtakePercentage": 0.0, "consumed": 603.9975000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 192, "geography": "DDR-Hoogly", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 2522.5200000000000000, "allocationQuantity": 2523.050, "offtakePercentage": 0.0, "consumed": 89.4400000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 193, "geography": "DDR-Howarh", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 1272.6000000000000000, "allocationQuantity": 1267.829, "offtakePercentage": 0.0, "consumed": 219.0000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 194, "geography": "DDR-Howarh", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 11964.990000000000, "allocationQuantity": 11938.328, "offtakePercentage": 0.0, "consumed": 2216.9475000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 195, "geography": "DDR-Howarh", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 954.4500000000000000, "allocationQuantity": 950.881, "offtakePercentage": 0.0, "consumed": 164.3250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 196, "geography": "DDR-Howarh", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 7976.6600000000000000, "allocationQuantity": 7958.878, "offtakePercentage": 0.0, "consumed": 1477.4350000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 197, "geography": "DDR-Howarh", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 3355.4400000000000000, "allocationQuantity": 3377.320, "offtakePercentage": 0.0, "consumed": 560.7100000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 198, "geography": "DDR-Howarh", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 3954.2700000000000000, "allocationQuantity": 3955.270, "offtakePercentage": 0.0, "consumed": 368.6225000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 199, "geography": "DDR-Howarh", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 5033.1600000000000000, "allocationQuantity": 5065.980, "offtakePercentage": 0.0, "consumed": 840.9300000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 200, "geography": "DDR-Howarh", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 3954.2700000000000000, "allocationQuantity": 3955.270, "offtakePercentage": 0.0, "consumed": 369.0400000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 201, "geography": "DDR-Kolkata North", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 2176.0000000000000000, "allocationQuantity": 2160.903, "offtakePercentage": 0.0, "consumed": 362.7000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 202, "geography": "DDR-Kolkata North", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 13379.760000000000, "allocationQuantity": 13306.408, "offtakePercentage": 0.0, "consumed": 1725.7425000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 203, "geography": "DDR-Kolkata North", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 1632.0000000000000000, "allocationQuantity": 1620.713, "offtakePercentage": 0.0, "consumed": 272.8500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 204, "geography": "DDR-Kolkata North", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 8919.8400000000000000, "allocationQuantity": 8870.921, "offtakePercentage": 0.0, "consumed": 1151.3250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 205, "geography": "DDR-Kolkata North", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 5526.1000000000000000, "allocationQuantity": 5577.220, "offtakePercentage": 0.0, "consumed": 387.5500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 206, "geography": "DDR-Kolkata North", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 3851.0500000000000000, "allocationQuantity": 3856.580, "offtakePercentage": 0.0, "consumed": 168.6500000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 207, "geography": "DDR-Kolkata North", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 8289.1500000000000000, "allocationQuantity": 8365.830, "offtakePercentage": 0.0, "consumed": 582.5625000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 208, "geography": "DDR-Kolkata North", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 3851.0500000000000000, "allocationQuantity": 3856.580, "offtakePercentage": 0.0, "consumed": 168.5200000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 209, "geography": "DDR-Kolkata South", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (AAY)", "quantity": 2685.0000000000000000, "allocationQuantity": 2675.801, "offtakePercentage": 0.0, "consumed": 149.9000000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 210, "geography": "DDR-Kolkata South", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Atta/Wheat (PHH)", "quantity": 17565.180000000000, "allocationQuantity": 17527.647, "offtakePercentage": 0.0, "consumed": 881.8725000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 211, "geography": "DDR-Kolkata South", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (AAY)", "quantity": 2013.7500000000000000, "allocationQuantity": 2006.875, "offtakePercentage": 0.0, "consumed": 112.4250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 212, "geography": "DDR-Kolkata South", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (PHH)", "quantity": 11710.120000000000, "allocationQuantity": 11685.084, "offtakePercentage": 0.0, "consumed": 587.4050000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 213, "geography": "DDR-Kolkata South", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-I)", "quantity": 8272.4800000000000000, "allocationQuantity": 8366.860, "offtakePercentage": 0.0, "consumed": 491.2550000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 214, "geography": "DDR-Kolkata South", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Rice (RKSY-II)", "quantity": 4342.3300000000000000, "allocationQuantity": 4423.370, "offtakePercentage": 0.0, "consumed": 173.4250000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 215, "geography": "DDR-Kolkata South", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-I)", "quantity": 12408.720000000000, "allocationQuantity": 12550.290, "offtakePercentage": 0.0, "consumed": 736.7175000000000000, "installedDevices": 0, "activeDevices": 0 }, { "id": 216, "geography": "DDR-Kolkata South", "allotmentMonth": "2020-01-01T00:00:00", "productName": "Wheat (RKSY-II)", "quantity": 4342.3300000000000000, "allocationQuantity": 4423.370, "offtakePercentage": 0.0, "consumed": 173.4250000000000000, "installedDevices": 0, "activeDevices": 0 }];

var districts = ["DCFS-ALIPURDUAR", "DCFS-BANKURA", "DCFS-BARDHAMAN", "DCFS-BIRBHUM", "DCFS-COOCH-BEHAR", "DCFS-DAKSHIN-DINAJPUR", "DCFS-DARJEELING", "DCFS-HOOGHLY", "DCFS-HOWRAH", "DCFS-JALPAIGURI", "DCFS-JHARGRAM", "DCFS-MALDAH", "DCFS-MURSHIDABAD", "DCFS-NADIA", "DCFS-NORTH-TWENTY-FOUR-PARGANAS", "DCFS-PASCHIM-BARDHAMAN", "DCFS-PASCHIM-MIDNAPORE", "DCFS-PURBA-MIDNAPORE", "DCFS-PURULIA", "DCFS-SOUTH-TWENTY-FOUR-PARGANAS", "DCFS-UTTAR-DINAJPUR", "DDR-Asansol", "DDR-Barrackpore", "DDR-Hoogly", "DDR-Howarh", "DDR-Kolkata-North", "DDR-Kolkata-South"];

$(document).ready(function () {
    console.log("About to call Dashboard Count API")

    $("#option1").on('change', function (x) {
        console.log("Day clicked!")
        getDashboard("day");
    });

    $("#option2").on('change', function (x) {
        console.log("Month clicked!")
        getDashboard("month");
    });

    $("#option3").on('change', function (x) {
        console.log("Year clicked!")
        getDashboard("year");
    });

    console.log("About to call loadCarouselItems")

    if ($("#userName") != null && $("#userName").val() == "Dashboard")
        loadCarouselItems()

    console.log("Loaded CarouselItems")

    $('.carousel').carousel()

    getDashboard("month");

    $('<input>').attr({
        type: 'hidden',
        name: '__RequestVerificationToken',
        value: $('input[name ="__RequestVerificationToken"]')[0].value
    }).appendTo('#logoutForm3');

    if ($("#userName") != null && $("#userName").val() == "Dashboard") {
        $(".header-fixed .app-body").css("margin-top", "10px");
        setInterval(refreshDashboard, 60 * 1000);
    }
});

function loadCarouselItems() {
    var options = {}

    $.each(districts, function (index, district) {
        //console.log("About to append carousel item:" + district + ",index:" + index)

        var div = '<div class="carousel-item' + (index == 0 ? ' active' : '') + '" id="carousel-' + district + '">' +
            '    <div class="row"> ' +
            '           <div class="col-sm-12 text-center"> <h3>' +
            district +
            '           </h3></div> ' +
            '    </div> ' +
            '    <div class="row"> ' +
            '         <!-- /.col--> ' +
            //'         <div class="col-sm-2"> ' +
            //'             <div class="card text-white bg-danger"> ' +
            //'                 <div class="card-body pb-0"> ' +
            //'                     <div>Transactions</div> ' +
            //'                     <div class="btn-group float-right"> ' +
            //'                         <div class="dropdown-menu dropdown-menu-right"> ' +
            //'                             <a class="my-link nav-link" href="TransactionDashboard.html">View Transactions</a> ' +
            //'                         </div> ' +
            //'                     </div> ' +
            //'                     <div class="text-value" id="dist-' + district + '-' + 'TxnCount"></div> ' +
            //'                 </div> ' +
            //'                 <div class="chart-wrapper mt-3 mx-3"> ' +
            //'                       <canvas class="chart" id=hidden-"' + district + '"></canvas> ' +
            //'                 </div> ' +
            //'             </div> ' +
            //'         </div> ' +
            '         <!-- /.col--> ' +
            '         <div class="col-sm-2"> ' +
            '             <div class="card text-white bg-danger"> ' +
            '                 <div class="card-body pb-0"> ' +
            '                     <div>Online Transactions</div> ' +
            '                     <div class="btn-group float-right"> ' +
            '                         <div class="dropdown-menu dropdown-menu-right"> ' +
            '                             <a class="my-link nav-link" href="TransactionDashboard.html">View Cards Transacted</a> ' +
            '                         </div> ' +
            '                     </div> ' +
            '                     <div class="text-value" id="dist-' + district + '-' + 'TxnCount"></div> ' +
            '                 </div> ' +
            '             </div> ' +
            '                 <div class="chart-wrapper mt-3 mx-3"> ' +
            '                       <canvas class="chart" id="chart-txn-' + district + '"></canvas> ' +
            '                 </div> ' +
            '         </div> ' +
            '         <!-- /.col--> ' +
            '         <div class="col-sm-2"> ' +
            '             <div class="card text-white bg-info"> ' +
            '                 <div class="card-body pb-0"> ' +
            '                     <div>Cards Transacted</div> ' +
            '                     <div class="btn-group float-right"> ' +
            '                         <div class="dropdown-menu dropdown-menu-right"> ' +
            '                             <a class="my-link nav-link" href="TransactionDashboard.html">View Cards Transacted</a> ' +
            '                         </div> ' +
            '                     </div> ' +
            '                     <div class="text-value" id="dist-' + district + '-' + 'CardCount"></div> ' +
            '                 </div> ' +
            '             </div> ' +
            '             <div class="chart-wrapper mt-3 mx-3"> ' +
            '                    <canvas class="chart" id="chart-card-' + district + '"></canvas> ' +
            '             </div> ' +
            '         </div> ' +
            '         <!-- /.col--> ' +
            '         <!-- /.col--> ' +
            '         <div class="col-sm-2"> ' +
            '             <div class="card text-white bg-primary"> ' +
            '                 <div class="card-body pb-0"> ' +
            '                     <div>Shops Transacted</div> ' +
            '                     <div class="btn-group float-right"> ' +
            '                         <div class="dropdown-menu dropdown-menu-right"> ' +
            '                             <a class="my-link nav-link" href="TransactionDashboard.html">View Shops Transacted</a> ' +
            '                         </div> ' +
            '                     </div> ' +
            '                     <div class="text-value" id="dist-' + district + '-' + 'ActiveShopCount"></div> ' +
            '                 </div> ' +
            '             </div> ' +
            '             <div class="chart-wrapper mt-3 mx-3"> ' +
            '                    <canvas class="chart" id="chart-shop-' + district + '"></canvas> ' +
            '             </div> ' +
            '         </div> ' +
            '         <div class="col-sm-2"> ' +
            '             <div class="card text-white bg-warning"> ' +
            '                 <div class="card-body pb-0"> ' +
            '                     <div>Auth Transactions</div> ' +
            '                     <div class="btn-group float-right"> ' +
            '                         <div class="dropdown-menu dropdown-menu-right"> ' +
            '                             <a class="dropdown-item" href="#">Action</a> ' +
            '                         </div> ' +
            '                     </div> ' +
            '                     <div class="text-value" id="dist-' + district + '-' + 'AadhaarAuthCount"></div> ' +
            '                 </div> ' +
            '             </div> ' +
            '             <div class="chart-wrapper mt-3 mx-3"> ' +
            '                    <canvas class="chart" id="chart-auth-' + district + '"></canvas> ' +
            '             </div> ' +
            '         </div> ' +
            '         <!-- /.col--> ' +
            '         <div class="col-sm-2"> ' +
            '             <div class="card text-white bg-danger"> ' +
            '                 <div class="card-body pb-0"> ' +
            '                     <div>Offtake (MT)</div> ' +
            '                     <div class="btn-group float-right"> ' +
            '                         <div class="dropdown-menu dropdown-menu-right"> ' +
            '                             <a class="my-link nav-link" href="StockOfftakeReport.html">View Stock Offtake Report</a> ' +
            '                         </div> ' +
            '                     </div> ' +
            '                     <div class="text-value" id="dist-' + district + '-' + 'QtyConsumed"></div> ' +
            '                 </div> ' +
            '             </div> ' +
            '             <div class="chart-wrapper mt-3 mx-3"> ' +
            '                    <canvas class="chart" id="chart-offtake-' + district + '"></canvas> ' +
            '             </div> ' +
            '         </div> ' +
            '         <!-- /.col--> ' +
            '         <!-- /.col--> ' +
            '         <div class="col-sm-2"> ' +
            '             <div class="card text-white bg-info"> ' +
            '                 <div class="card-body pb-0"> ' +
            '                     <div>Seeding (Demo Auth)</div> ' +
            '                     <div class="btn-group float-right"> ' +
            '                         <div class="dropdown-menu dropdown-menu-right"> ' +
            '                             <a class="my-link nav-link" href="StockOfftakeReport.html">View Seeding Report</a> ' +
            '                         </div> ' +
            '                     </div> ' +
            '                     <div class="text-value" id="dist-' + district + '-' + 'QtySeeding"></div> ' +
            '                 </div> ' +
            '             </div> ' +
            '             <div class="chart-wrapper mt-3 mx-3"> ' +
            '                    <canvas class="chart" id="chart-seeding-' + district + '"></canvas> ' +
            '             </div> ' +
            '         </div> ' +
            '         <!-- /.col--> ' +
            '   </div> ' +
            '</div>';

        $("#main-carousel").html($("#main-carousel").html() + div)
    });
}

function refreshDashboard() {
    getDashboard("month");
}

function getOfftake() {
    getOfftake("month")
}

function getOfftake(period, dashboardData) {
    $.ajax({
        url: "/api/Dashboards/GetDistWiseDashboardByDateLevelAndGeo?period=" + period + "&levels=" + level + "&geography=" + geography,
        dataType: "json",
        success: function (data) {
            var updatedDt = $("#lastUpdated");

            var today = new Date().toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            })

            if (updatedDt != null)
                updatedDt.html("Last Updated Date: " + today);

            offtakeData = data;
            refreshChart(offtakeData, dashboardData);
        }
    });
}

function getDashboard(period) {
    $.ajax({
        url: "/api/Dashboards/GetDashboardByDateLevelAndGeo?period=" + period + "&levels=" + level + "&geography=" + geography,
        dataType: "json",
        success: function (data) {
            chartData = data;
            //refreshChart(chartData);
            if ($("#userName") != null && $("#userName").val() == "Dashboard")
                getOfftake(period, data);
            else
                refreshChart("", chartData);
        }
    });
}

function populateOfftakeCharts(offtakeData) {
    var districts = [...new Set(offtakeData.map(a => a.geography))];
    for (i = 0; i < districts.length; i++) {
        var distOfftake = offtakeData.filter(function (element) {
            return element.geography === districts[i];
        });
        var products = [...new Set(distOfftake.map(a => a.productName))];
        var consumed = Math.round(distOfftake[0].qtyConsumed);
        var allocationQty = Math.round(distOfftake[0].allocationQty);
        var offtakePerc = distOfftake.map(a => Math.round(a.offtakePercent));

        var activeDevices = distOfftake[0].activeShopCount;
        var inactiveDevices = distOfftake[0].totalShopCount - distOfftake[0].activeShopCount;

        var usedCards = distOfftake[0].cardCount;
        var unusedCards = distOfftake[0].totalCardCount - distOfftake[0].cardCount;


        var txnCount = distOfftake[0].txnCount;
        var seedingCount = distOfftake[0].seedingCount;
        var seedingAuthCount = distOfftake[0].seedingAuthCount;
        var aadhaarAuthCount = distOfftake[0].aadhaarAuthCount;
        var onlineTxnCount = distOfftake[0].onlineTxnCount;
        var mobileAuthCount = distOfftake[0].mobileAuthCount;

        $("#dist-" + districts[i] + "-CardCount").html("<h4> " + usedCards + "<br/>" + (usedCards + unusedCards) + "<small> Total</small></h4>");
        $("#dist-" + districts[i] + "-ActiveShopCount").html("<h4> " + activeDevices + "<br/>" + (activeDevices + inactiveDevices) + "<small> Installed</small></h4>");
        $("#dist-" + districts[i] + "-QtyConsumed").html("<h4> " + consumed + "<br/>" + allocationQty + "<small> Allocated</small></h4>");


        $("#dist-" + districts[i] + "-TxnCount").html("<h4> " + onlineTxnCount + "<br/>" + txnCount + "<small> Total</small></h4>");
        $("#dist-" + districts[i] + "-QtySeeding").html("<h4> " + seedingAuthCount + "<br/>" + seedingCount + "<small> Total</small></h4>");
        $("#dist-" + districts[i] + "-AadhaarAuthCount").html("<h4> " + aadhaarAuthCount + "<br/>" + txnCount + "<small> Total</small></h4>");

        var config = getConfig(onlineTxnCount, txnCount - onlineTxnCount); 

        var ctx = document.getElementById('chart-txn-' + districts[i]).getContext('2d');
        new Chart(ctx, config);

        var config = getConfig(usedCards, unusedCards); 

        var ctx = document.getElementById('chart-card-' + districts[i]).getContext('2d');
        new Chart(ctx, config);

        var config = getConfig(activeDevices, inactiveDevices); 

        var ctx = document.getElementById('chart-shop-' + districts[i]).getContext('2d');
        new Chart(ctx, config);

        var config = getConfig(aadhaarAuthCount + mobileAuthCount, txnCount - (aadhaarAuthCount + mobileAuthCount)); 

        var ctx = document.getElementById('chart-auth-' + districts[i]).getContext('2d');
        new Chart(ctx, config);

        var config = getConfig(consumed, allocationQty - consumed); 

        var ctx = document.getElementById('chart-offtake-' + districts[i]).getContext('2d');
        new Chart(ctx, config);

        var config = getConfig(seedingAuthCount, seedingCount - seedingAuthCount); 

        var ctx = document.getElementById('chart-seeding-' + districts[i]).getContext('2d');
        new Chart(ctx, config);

    }
}

function getConfig(value, total) {
    return {
        type: 'pie',
            plugins: [ChartDataLabels],
                data: {
            datasets: [{
                data: [value, total],
                backgroundColor: [
                    getStyle('--success'),
                    getStyle('--primary')
                ],
                datalabels: {
                    anchor: 'end'
                }
            }]
        },
        options: {
            plugins: {
                datalabels: {
                    backgroundColor: function (context) {
                        return context.dataset.backgroundColor;
                    },
                    borderColor: 'white',
                        borderRadius: 25,
                            borderWidth: 2,
                                color: 'white',
                                    display: function (context) {
                                        return context.dataset.data[context.dataIndex] > 0; //Use if you want to suppress values below threshold
                                    },
                    font: {
                        weight: 'bold'
                    },
                    formatter: Math.round
                }
            },
            tooltips: {
                mode: 'index',
                    intersect: false
            },
            responsive: true,
            layout: {
                padding: {
                    bottom: 10
                }
            }
        }
    };
}

function refreshChart(offtakeData, data) {
    if ($("#userName") != null && $("#userName").val() == "Dashboard")
        populateOfftakeCharts(offtakeData);

    var txnChartLabelVal = [], seedingChartCount = [], cardChartCount = [], cardChartCountPercent = [], shopChartCount = [], aadhaarAuthChartCount = [], stockOfftakeChartCount = [], stockOfftakeChartPercent = [],
        txnChartCurMonth = [], txnChartPrevMonth = [], curMonthStockOfftake = [], stockOfftakeChartCumQty = []; prevMonthStockOfftake = [], cumTxnChartCurMonth = [];

    var txnCount = 0, cardCount = 0, seedingCount = 0, cumCardCount = 0, cumStockOfftake = 0, aadhaarAuthCount = 0, shopsNotOpened = 0, offtakePercent = 0.00, stockOfftake = 0, shopCount = 0, totalShopCount = 0, totalCardCount = 0, cumOfftake = 0;

    //console.log("this is data" + JSON.stringify(data));

    cumTxnCurMonth = 0;

    data.forEach(function (row) {
        //console.log("this is row.:" + JSON.stringify(row));
        cumTxnCurMonth += row.txnCount;
        seedingCount += row.seedingCount;
        cumStockOfftake += Math.round(row.qtyConsumed / 1000, 0);

        txnChartLabelVal.push(row.txnDate);
        txnChartCurMonth.push(row.txnCount);
        cardChartCount.push(row.cardCount);
        seedingChartCount.push(seedingCount);

        curMonthStockOfftake.push(Math.round(row.qtyConsumed / 1000, 0));
        shopChartCount.push(row.activeShopCount);
        aadhaarAuthChartCount.push(row.aadhaarAuthCount);
        stockOfftakeChartCount.push(Math.round(row.qtyConsumed / 1000, 0));
        cumTxnChartCurMonth.push(cumTxnCurMonth);
        stockOfftakeChartCumQty.push(cumStockOfftake);

        txnCount += row.txnCount;
        aadhaarAuthCount += row.aadhaarAuthCount;
        stockOfftake += Math.round(row.qtyConsumed / 1000, 0);
        offtakePercent += row.offtakePercent;

        shopCount = Math.max(row.activeShopCount, shopCount);
        cardCount = Math.max(row.cardCount, cardCount);
        totalShopCount = Math.max(row.totalShopCount, totalShopCount);
        totalCardCount = Math.max(row.totalCardCount, totalCardCount);
        cumOfftake = Math.max(cumStockOfftake, cumOfftake);

        stockOfftakeChartPercent.push(Math.round(offtakePercent, 2));
    });

    console.log("This is the totalCardCount:" + totalCardCount);
    cardChartCount.forEach(function (row) {
        var currentPercent = Math.round(row / (totalCardCount + 1) * 100, 2);
        //console.log("This is the row:" + row + ", cumCardCount:" + cumCardCount + ", currentPercent:" + currentPercent);
        cardChartCountPercent.push(currentPercent);
    });

    shopsNotOpened = totalShopCount - shopCount;

    $("#txnCount").html(txnCount);
    $("#cardCount").html(cardCount);
    $("#aadhaarAuthCount").html(aadhaarAuthCount);
    //$("#mobileAuthCount") = data.aadhaarAuthCount;
    $("#activeShopCount").html(shopCount);
    //$("#totalShopCount") = data.totalShopCount;
    $("#offtakePercent").html(offtakePercent);
    $("#qtyConsumed").html(stockOfftake);
    $("#period").html(data.period);
    $("#qtySeeding").html(seedingCount);

    var shopsActivePerc = Math.floor(shopCount / (totalShopCount + 1) * 100);
    var cardsActivePerc = Math.floor(cardCount / (totalCardCount + 1) * 100);
    var aadhaarAuthPerc = Math.floor(aadhaarAuthCount / (txnCount + 1) * 100);
    var offtakePerc = Math.floor(offtakePercent);
    var shopsNotOpenedPerc = Math.floor(shopsNotOpened / (totalShopCount + 1) * 100);

    $("#shopsActivePerc").html(shopCount + " Active (" + shopsActivePerc + "%)")
    $("#cardsActivePerc").html(cardCount + " Cards (" + cardsActivePerc + "%)")
    $("#aadhaarAuthPerc").html(aadhaarAuthCount + " Aadhaar Auth (" + aadhaarAuthPerc + "%)")
    $("#offtakePerc").html(stockOfftake + " Offtake (" + offtakePerc + "%)")
    $("#shopsNotOpened").html(shopsNotOpened + " Shops Inactive (" + shopsNotOpenedPerc + "%)")

    var val = 'width: ' + shopsActivePerc + '%';
    $("#shopsActivePercBar").attr("style", val)
    $("#shopsActivePercBar").attr("aria-valuenow", shopsActivePerc)

    var val = 'width: ' + cardsActivePerc + '%';
    $("#cardsActivePercBar").attr("style", val)
    $("#cardsActivePercBar").attr("aria-valuenow", cardsActivePerc)

    var val = 'width: ' + aadhaarAuthPerc + '%';
    $("#aadhaarAuthPercBar").attr("style", val)
    $("#aadhaarAuthPercBar").attr("aria-valuenow", aadhaarAuthPerc)

    var val = 'width: ' + offtakePerc + '%';
    $("#offtakePercBar").attr("style", val)
    $("#offtakePercBar").attr("aria-valuenow", offtakePerc)

    var val = 'width: ' + shopsNotOpenedPerc + '%';
    $("#shopsNotOpenedBar").attr("style", val)
    $("#shopsNotOpenedBar").attr("aria-valuenow", shopsNotOpenedPerc)

    var mintxns, maxtxns;
    var minqty, maxqty;


    mintxns = Math.min(...cumTxnChartCurMonth);
    maxtxns = Math.max(...cumTxnChartCurMonth);

    if (Math.min(...txnChartPrevMonth) < mintxns) mintxns = Math.min(...txnChartPrevMonth);
    if (Math.max(...txnChartPrevMonth) > maxtxns) maxtxns = Math.max(...txnChartPrevMonth);


    minqty = Math.min(...curMonthStockOfftake);
    maxqty = Math.max(...curMonthStockOfftake);


    if (Math.min(...prevMonthStockOfftake) < minqty) mintxns = Math.min(...prevMonthStockOfftake);
    if (Math.max(...prevMonthStockOfftake) > maxtxns) maxtxns = Math.max(...prevMonthStockOfftake);


    var txnCountChart1 = new Chart($('#qtyTxns-chart1'), {
        type: 'line',
        data: {
            labels: txnChartLabelVal,
            datasets: [{
                label: 'Txn Count',
                backgroundColor: getStyle('--danger'),
                borderColor: 'rgba(255,255,255,.55)',
                data: cumTxnChartCurMonth
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        display: false
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    }); // eslint-disable-next-line no-unused-vars


    var activeShopCountChart1 = new Chart($('#activeShopCount-chart1'), {
        type: 'line',
        data: {
            labels: txnChartLabelVal,
            datasets: [{
                label: 'Active Shop Count',
                backgroundColor: getStyle('--primary'),
                borderColor: 'rgba(255,255,255,.55)',
                data: shopChartCount
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        display: false
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    }); // eslint-disable-next-line no-unused-vars

    var cardCountChart2 = new Chart($('#cardCount-chart2'), {
        type: 'line',
        data: {
            labels: txnChartLabelVal,
            datasets: [{
                label: 'Card Count',
                backgroundColor: getStyle('--info'),
                borderColor: 'rgba(255,255,255,.55)',
                data: cardChartCount
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        display: false
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    }); // eslint-disable-next-line no-unused-vars

    var aadhaarAuthCountChart3 = new Chart($('#aadhaarAuthCount-chart3'), {
        type: 'line',
        data: {
            labels: txnChartLabelVal,
            datasets: [{
                label: 'Aadhaar Auth Count',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: aadhaarAuthChartCount
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: false
                }],
                yAxes: [{
                    display: false
                }]
            },
            elements: {
                line: {
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    }); // eslint-disable-next-line no-unused-vars

    var qtyConsumedChart4 = new Chart($('#qtyConsumed-chart4'), {
        type: 'bar',
        data: {
            labels: txnChartLabelVal,
            datasets: [{
                label: 'Stock Offtake',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: stockOfftakeChartCount
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    display: false,
                    barPercentage: 0.6
                }],
                yAxes: [{
                    display: false
                }]
            }
        }
    }); // eslint-disable-next-line no-unused-vars


    var seedingCountChart6 = new Chart($('#seedingCount-chart6'), {
        type: 'line',
        data: {
            labels: txnChartLabelVal,
            datasets: [{
                label: 'Seeding Count',
                backgroundColor: getStyle('--info'),
                borderColor: 'rgba(255,255,255,.55)',
                data: seedingChartCount
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                }],
                yAxes: [{
                    display: false,
                    ticks: {
                        display: false
                    }
                }]
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4
                }
            }
        }
    }); // eslint-disable-next-line no-unused-vars


    var dataChart = {
        labels: txnChartLabelVal,
        datasets: [{
            label: "Day's Transactions",
            backgroundColor: hexToRgba(getStyle('--info'), 10),
            borderColor: getStyle('--info'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: txnChartCurMonth,
            yAxisID: 'left-y-axis'
        }, /***{
                    label: 'Previous Month Transaction Count',
                    backgroundColor: 'transparent',
                    borderColor: getStyle('--success'),
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: txnChartPrevMonth,
                    yAxisID: 'left-y-axis'

                }, ****/{
            label: "Day's Stock Offtake",
            backgroundColor: 'transparent',
            borderColor: getStyle('--danger'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5],
            data: curMonthStockOfftake,
            yAxisID: 'right-y-axis'

        },/***
                    {
                    label: 'Previous Month Stock Offtake',
                    backgroundColor: 'transparent',
                    borderColor: getStyle('--danger'),
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 1,
                    borderDash: [8, 5],
                    data: prevMonthStockOfftake,
                    yAxisID: 'right-y-axis'
                    },****/
        {
            label: 'Cumulative Transactions',
            backgroundColor: 'transparent',
            borderColor: getStyle('--success'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: cumTxnChartCurMonth,
            yAxisID: 'left-y-axis'
        }]
    };

    var cardDataChart = {
        labels: txnChartLabelVal,
        datasets: [{
            label: "Cumulative Cards(Family) Lifted (Nos)",
            backgroundColor: hexToRgba(getStyle('--success'), 10),
            borderColor: getStyle('--success'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: cardChartCount,
            yAxisID: 'left-y-axis'
        }, {
            label: "Cards(Family) Lifted On Date(Nos)",
            backgroundColor: hexToRgba(getStyle('--info'), 10),
            borderColor: getStyle('--info'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: txnChartCurMonth,
            yAxisID: 'left-y-axis'
        }, {
            label: "Cards(Family) Lifted (%)",
            backgroundColor: 'transparent',
            borderColor: getStyle('--danger'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5],
            data: cardChartCountPercent,
            yAxisID: 'right-y-axis'

        }]
    };


    var offtakeDataChart = {
        labels: txnChartLabelVal,
        datasets: [{
            label: "Cumulative Stock Offtake (MT)",
            backgroundColor: hexToRgba(getStyle('--success'), 10),
            borderColor: getStyle('--success'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: stockOfftakeChartCumQty,
            yAxisID: 'left-y-axis'
        }, {
            label: "Day's Stock Offtake (MT)",
            backgroundColor: hexToRgba(getStyle('--info'), 10),
            borderColor: getStyle('--info'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: curMonthStockOfftake,
            yAxisID: 'left-y-axis'
        }, {
            label: "Stock Offtake Percent",
            backgroundColor: 'transparent',
            borderColor: getStyle('--danger'),
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5],
            data: stockOfftakeChartPercent,
            yAxisID: 'right-y-axis'

        }]
    };

    var limit = 3;


}





//# sourceMappingURL=main.js.map