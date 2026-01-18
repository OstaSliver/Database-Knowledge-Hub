function renderCharts(correctCount, categories) {
    const ctxScore = document.getElementById('scoreChart').getContext('2d');
    new Chart(ctxScore, {
        type: 'doughnut',
        data: {
            labels: ['ถูกต้อง', 'ผิดพลาด'],
            datasets: [{
                data: [correctCount, quizData.length - correctCount],
                backgroundColor: ['#19b259', '#f04040'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom' } }
        }
    });

    const labels = Object.keys(categories);
    const data = labels.map(
        c => Math.round((categories[c].correct / categories[c].total) * 100)
    );

    const ctxTopic = document.getElementById('topicChart').getContext('2d');
    new Chart(ctxTopic, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'ความถูกต้อง (%)',
                data,
                backgroundColor: '#4299E1',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });
}
