const { connectEmployersAndFreelancers, manageProjects, feedbackSystem } = require('./index');

// Start the application
function startApp() {
    console.log('Starting the application...');
    try {
        connectEmployersAndFreelancers();
        manageProjects();
        feedbackSystem();
        console.log('Application started successfully.');
    } catch (error) {
        console.error('Error starting the application:', error);
    }
}

startApp();