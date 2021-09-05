function PlaySound(src, vol) {
    let completedSound = new Audio(src)
    completedSound.volume = vol
    completedSound.play().then(() => {}).catch((error) => console.log(error))
}

export default PlaySound;