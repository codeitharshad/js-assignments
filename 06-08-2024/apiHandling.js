// Write an asynchronous function named fetchUserData that fetches
//  user data from an API endpoint (e.g., https://jsonplaceholder.typicode.com/users) 
// and logs the first user's name to the console. Use async and await.

async function getUserData() {
  const apiLink = "https://jsonplaceholder.typicode.com/users";

  try {
    const result = await fetch(apiLink);

    if (!result.ok) {
      throw new Error("Error");
    }

    const data = await result.json();
    console.log(`First user name: ${data[0].name}`);
  } catch (err) {
    console.error(err);
  }
}

getUserData();