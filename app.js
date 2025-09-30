const { connectEmployersAndFreelancers, manageProjects, feedbackSystem } = require('./index');

// Khởi động ứng dụng
function startApp() {
    console.log('Khởi động ứng dụng...');
    connectEmployersAndFreelancers();
    manageProjects();
    feedbackSystem();
}

startApp();