
	angular.module("financeira", []);
	angular.module("financeira").controller("financeiraCtrl", function ($scope) {

		$scope.app = "Financeira & Linha de Crédito";
		$scope.app2 = "Lista de Créditos";

		$scope.emprestimos = [
			{nomeCliente: "João", limiteCredito: 5000, total: 0},
			{nomeCliente: "Maria", limiteCredito: 5001, total: 500.1},
			{nomeCliente: "José", limiteCredito: 10000, total: 1000}
		];

		$scope.adicionarEmprestimo = function(emprestimo) {
			if (emprestimo.limiteCredito >= 1000 && emprestimo.limiteCredito <=  5000) {
				alert("Emprestimo de 1.000,00 a 5.000,00 - Isenta de taxa de Juros!!");
				emprestimo.total = 0;
				$scope.emprestimos.push(angular.copy(emprestimo));
				delete $scope.emprestimo;
			}


			if (emprestimo.limiteCredito >= 5001 && emprestimo.limiteCredito <=  10000) {

				alert("Emprestimo de 5.001,00 a 10.000,00 - Taxa de Juros de 10%!!");
				emprestimo.total = emprestimo.limiteCredito * 0.10;
				$scope.emprestimos.push(angular.copy(emprestimo));
				delete $scope.emprestimo;
			}

			if (emprestimo.limiteCredito >= 10001) {
				alert("Empréstimo acima de 10.001 -  Taxa de Juros de 20%!");
				emprestimo.total = emprestimo.limiteCredito * 0.20;
				$scope.emprestimos.push(angular.copy(emprestimo));
				delete $scope.emprestimo;

			}
		};

	});

