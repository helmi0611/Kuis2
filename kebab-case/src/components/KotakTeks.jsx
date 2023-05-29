import React from "react"

function KotakTeks() {
    return (
        <>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Masukan Email"></input>
        <label for="katasandi">Kata Sandi</label>
        <input type="password" id="katasandi" name="katasandi" placeholder="Masukan Kata Sandi"></input>
        </>
    )
}

export default KotakTeks;