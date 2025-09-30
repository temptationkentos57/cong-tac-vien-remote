const { connectEmployersAndFreelancers, manageProjects, feedbackSystem } = require('./index');

// Start the application
function startApp() {
    console.log('Starting the application...');
    connectEmployersAndFreelancers();
    manageProjects();
    feedbackSystem();
}

startApp();