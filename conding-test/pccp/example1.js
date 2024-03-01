function bandage(bandage, health, attacks) {
    const [recoveryFullCasting, recovery, additonalRecovery] = bandage
    const maxHealth = health
    let currentHealth = health
    let currentTime = 0
    
    for (let i = 0; i < attacks.length; i ++) {
        const [attackTime, damage] = attacks[i]

        if (i > 0) {
            const beforeAttackTime = attacks[i-1][0]
            const remainTime = attackTime - beforeAttackTime - 1
            
            currentHealth += recovery * remainTime
            if (recoveryFullCasting <= remainTime) {
                const countFullCast = Math.ceil(remainTime / recoveryFullCasting)
                currentHealth += additonalRecovery * countFullCast
            }
            
            if (currentHealth > maxHealth) {
                currentHealth = maxHealth
            }
        }

        currentHealth -= damage 
        currentTime = attackTime

        if (currentHealth <= 0) {
            currentHealth = -1
            break
        }
    }

    return currentHealth
}

module.exports = bandage