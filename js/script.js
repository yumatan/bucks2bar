window.onload = function () {

    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.getElementById('chart-tab').addEventListener('click', function () {

        // January
        var janIncome = document.getElementById('jan-income').value;
        var janExpenses = document.getElementById('jan-expenses').value;

        // February
        var febIncome = document.getElementById('feb-income').value;
        var febExpenses = document.getElementById('feb-expenses').value;

        // March
        var marIncome = document.getElementById('mar-income').value;
        var marExpenses = document.getElementById('mar-expenses').value;

        // April
        var aprIncome = document.getElementById('apr-income').value;
        var aprExpenses = document.getElementById('apr-expenses').value;

        // May
        var mayIncome = document.getElementById('may-income').value;
        var mayExpenses = document.getElementById('may-expenses').value;

        // June
        var junIncome = document.getElementById('jun-income').value;
        var junExpenses = document.getElementById('jun-expenses').value;

        // July
        var julIncome = document.getElementById('jul-income').value;
        var julExpenses = document.getElementById('jul-expenses').value;

        // August
        var augIncome = document.getElementById('aug-income').value;
        var augExpenses = document.getElementById('aug-expenses').value;

        // September
        var sepIncome = document.getElementById('sep-income').value;
        var sepExpenses = document.getElementById('sep-expenses').value;

        // October
        var octIncome = document.getElementById('oct-income').value;
        var octExpenses = document.getElementById('oct-expenses').value;

        // November
        var novIncome = document.getElementById('nov-income').value;
        var novExpenses = document.getElementById('nov-expenses').value;

        // December
        var decIncome = document.getElementById('dec-income').value;
        var decExpenses = document.getElementById('dec-expenses').value;

        var incomeData = [janIncome, febIncome, marIncome, aprIncome, mayIncome, junIncome, julIncome, augIncome, sepIncome, octIncome, novIncome, decIncome];
        var expensesData = [janExpenses, febExpenses, marExpenses, aprExpenses, mayExpenses, junExpenses, julExpenses, augExpenses, sepExpenses, octExpenses, novExpenses, decExpenses];

        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;

        myChart.update();
    });
}
