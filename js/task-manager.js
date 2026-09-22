function weeklyGoal(userName, dailyGoal, bonusTasks){
    // Weekly Goal: Calculate the total weekly task goal for a user.
       userName = document.getElementById("userName");
       dailyGoal = document.getElementById("dailyGoal");
       bonusTasks = document.getElementById("bonusTasks");
        // Output message to console
        // FIXED: Added missing parenthesis to console.log. :)
        console.log("Checking status for: " + userName); 
 
        // Calculate weekly goal based on number of workdays (5) per week
        // Fixed the incorrectly spelt variable name. It was "dialygoal" when it should have been "dailyGoal".
        // Changed value of 15 to 5.
        let weeklyGoal = dailyGoal * 5; 
 
        // Add bonusTasks to weeklyGoal. 
        // Note: Check for data type issues
        // Changed - sign to + sign.
        let totalGoal = weeklyGoal + bonusTasks; 
 
        // Output results to web page
        // Fixed quotation marks.
        output = ("User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal);

        document.getElementById(goal-message) = output;
        preventDefault();

        let clicking = document.getElementById(goal-btn);
        clicking.addEventListener("click",)
}

    // Add EventListener to btn, get form values and call weeklyGoal function
    const btn = document.getElementById("goal-btn");
    btn.addEventListener("click", function() {
        event.preventDefault(); // Prevent form submission
        let userName = document.getElementById("userName").value;
        let dailyGoal = parseInt(document.getElementById("dailyGoal").value);
        let bonusTasks = parseInt(document.getElementById("bonusTasks").value);
        weeklyGoal(userName, dailyGoal, bonusTasks);
    });