import Ball from './Ball.js'
const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")
let lastTime
function update(time)
{
    if (lastTime != null)
    {
    const delta = time - lastTime
    ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
    ball2.update(delta,[playerPaddle.rect(),computerPaddle.rect()])
    ball3.update(delta,[playerPaddle.rect(),computerPaddle.rect()])
    computerPaddle.update(delta,ball.y)
    if (isLose()) handleLoss()
    {
        console.log("lose")
    }
    }
    lastTime = time
    window.requestAnimationFrame(update)
}
function isLose()
{
    const bounce = ball.rect()
    return bounce.right >= window.innerWidth || bounce.left <= 0
}
function handleLoss()
{
    const bounce = ball.rect()
    if(bounce.right >= window.innerWidth)
    {
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    }
    else
    {
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }
    ball.reset()
    computerPaddle.reset()        
}
document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})
window.requestAnimationFrame(update)