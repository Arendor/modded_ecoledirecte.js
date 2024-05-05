const { Session } = require('../dist/Session.js')

async function main() {
    // Create a new Session.
    const session = new Session("username", "mdp");

    // Bring your session to life!
    const account = await session.login({
		question: "réponse",
	}).catch(err => {
        console.log(err)
        console.error("This login did not go well.");
    });
    console.log(session)

    // Is it a student account?
    if (!account || account.type !== "student") throw new Error("Not a student!");
    const notes = await account.getPeriods();
    
    console.log(notes)
}

main()