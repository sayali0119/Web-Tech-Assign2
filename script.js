document.getElementById("donorForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const blood = document.getElementById("blood").value;
    const city = document.getElementById("city").value;

    const res = await fetch("http://localhost:3000/donors", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, blood, city })
    });

    const data = await res.json();
    alert("Donor Added ✅");
});