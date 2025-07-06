let userRole = "manager";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
}
else if (userRole === "manager") {
    accessLevel = "Limited access granted";
}
else {
    accessLevel = "No access granted";
}

console.log("Access level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);

let isAuthenticated = true;
 let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication status: ", authenticationStatus);

let orgMember = "Subscription only"
let benefits;

if (orgMember === "Employee") {
    benefits = "Ernährungsdienste";
} else if ( orgMember === "Subscribed member") {
    benefits = "Ernährungsdienste and personal interaction";
} else if ( orgMember === "Subscription only") {
    benefits = "Patially Ernährungsdienste";
} else {
    benefits = "Pls. subscribe first"
}

console.log("Your benefits are: ", benefits);