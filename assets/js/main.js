function theHorror() {
    let month = document.getElementById("month").value
    let mon = month.toLowerCase()
    if (mon == "mar") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aries.png" alt="">
        <h2>Your horoscope is Aries</h2>
        <p>Today your patience might be tested when one or more of your projects gets put on hold by someone…</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "apr") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_taurus.png" alt="">
        <h2>Your horoscope is Taurus</h2>
        <p>Your intense energy makes you a great candidate for a leadership position right now, so if you are…</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "may") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_gemini.png" alt="">
        <h2>Your horoscope is Gemini</h2>
        <p>If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "jun") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_cancer.png" alt="">
        <h2>Horoscopes are Cancer</h2>
        <p>Too many different elements in your life are overlapping with each other right now—and it's your…</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "jul") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_leo.png" alt="">
        <h2>Your horoscopes is Leo</h2>
        <p>The issues you'll be dealing with today are very complicated ones—you will have to navigate your…</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "aug") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_virgo.png" alt="">
        <h2>Your horoscopes is Virgo</h2>
        <p>You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "sep") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_libra.png" alt="">
        <h2>Your horoscopes is Libra</h2>
        <p>Pick a cultural event that's coming up and get some tickets for it today.</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "oct") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_scorpio.png" alt="">
        <h2>Your horoscopes is Hank Scorpio</h2>
        <p>Someone will challenge a belief that you've held for a very long time today—and they will say an…</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "nov") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_sagittarius.png" alt="">
        <h2>Your horoscopes is Sagittarius</h2>
        <p>Someone in your life needs to step up and take on more responsibility—and you need to tell them to....</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "dec") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_capricorn.png" alt="">
        <h2>Your horoscopes is Capri Sun</h2>
        <p>Breaking the rules is not always a bad thing—especially if the rules limit your creativity.</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "jan") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_aquarius.png" alt="">
        <h2>Your horoscopes is Aquarius</h2>
        <p>Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else if (mon == "feb") {
        document.getElementById("header").style.color = "#000"
        document.getElementById("gullible").innerHTML = `<img src="https://www.horoscopedates.com/img/icon_pisces.png" alt="">
        <h2>Your horoscopes is Pissces</h2>
        <p>Communication is very important today—written, spoken, and even nonverbal body language will all…</p>`
        document.getElementById("gullible").style.boxShadow = "2px 2px 2px 4px #666"
    } else {
        document.getElementById("header").style.color = "red"
        document.getElementById("gullible").innerHTML = "<h2>Please follow the instructions</h2>"
    }
} 