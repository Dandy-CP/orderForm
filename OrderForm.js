function OrderFormController($scope) {
  $scope.menu = [
    {
      nama: "Capucciono",
      harga: 35000,
      active: true,
    },
    {
      nama: "Green Tea Latte",
      harga: 40000,
      active: false,
    },
    {
      nama: "Fish And Chips",
      harga: 50000,
      active: false,
    },
    {
      nama: "Tuna Sandwich",
      harga: 45000,
      active: false,
    },
    {
      nama: "Mineral Water",
      harga: 8000,
      active: false,
    },
    {
      nama: "French Fries",
      harga: 18000,
      active: false,
    },
  ];

  $scope.toggleActive = function (s) {
    s.active = !s.active;
  };

  $scope.total = function () {
    var total = 0;

    angular.forEach($scope.menu, function (s) {
      if (s.active) {
        total += s.harga;
      }
    });

    return total;
  };
}
