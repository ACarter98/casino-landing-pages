// Casino bonus data with affiliate tracking
const bonusData = [
    {
        id: 1,
        casino: "Jackpot City Casino",
        bonusAmount: "$1600",
        bonusType: "Welcome Bonus",
        percentage: "100%",
        maxBonus: 1600,
        wagering: "50x",
        minDeposit: 10,
        freeSpins: 0,
        country: ["CA", "AU", "NZ"],
        rating: 4.8,
        affiliateLink: "https://jackpotcity.com?aff=cbg1600&ref=casino-bonus-guide",
        terms: "18+. New players only. 50x wagering requirement applies. Terms apply.",
        expiration: "30 days",
        gameRestrictions: "Slots only",
        exclusive: true,
        highlights: ["High bonus amount", "Trusted brand", "Fast payouts"]
    },
    {
        id: 2,
        casino: "Spin Casino",
        bonusAmount: "$1000",
        bonusType: "Welcome Package",
        percentage: "100%",
        maxBonus: 1000,
        wagering: "40x",
        minDeposit: 10,
        freeSpins: 100,
        country: ["CA", "AU", "IE", "UK"],
        rating: 4.7,
        affiliateLink: "https://spincasino.com?aff=cbg1000&ref=casino-bonus-guide",
        terms: "18+. New players only. 40x wagering on bonus, 35x on free spins. Terms apply.",
        expiration: "7 days",
        gameRestrictions: "Selected slots",
        exclusive: false,
        highlights: ["Includes free spins", "Low wagering", "Mobile friendly"]
    },
    {
        id: 3,
        casino: "Ruby Fortune",
        bonusAmount: "$750",
        bonusType: "No Deposit Bonus",
        percentage: "N/A",
        maxBonus: 750,
        wagering: "30x",
        minDeposit: 0,
        freeSpins: 50,
        country: ["CA", "AU", "NZ"],
        rating: 4.6,
        affiliateLink: "https://rubyfortune.com?aff=cbg750&ref=casino-bonus-guide",
        terms: "18+. New players only. 30x wagering requirement. Max cashout $100. Terms apply.",
        expiration: "14 days",
        gameRestrictions: "Selected games",
        exclusive: true,
        highlights: ["No deposit required", "Low wagering", "Free spins included"]
    },
    {
        id: 4,
        casino: "Betway Casino",
        bonusAmount: "$500",
        bonusType: "Welcome Bonus",
        percentage: "100%",
        maxBonus: 500,
        wagering: "35x",
        minDeposit: 20,
        freeSpins: 0,
        country: ["CA", "UK", "IE"],
        rating: 4.5,
        affiliateLink: "https://betway.com?aff=cbg500&ref=casino-bonus-guide",
        terms: "18+. New players only. 35x wagering requirement. Min deposit £20. Terms apply.",
        expiration: "30 days",
        gameRestrictions: "All games (different contributions)",
        exclusive: false,
        highlights: ["Trusted brand", "Sports betting available", "Good game selection"]
    },
    {
        id: 5,
        casino: "Lucky Nugget",
        bonusAmount: "$200",
        bonusType: "Free Spins Bonus",
        percentage: "N/A",
        maxBonus: 200,
        wagering: "25x",
        minDeposit: 10,
        freeSpins: 200,
        country: ["CA", "AU", "NZ"],
        rating: 4.4,
        affiliateLink: "https://luckynugget.com?aff=cbg200&ref=casino-bonus-guide",
        terms: "18+. New players only. 25x wagering on winnings. Min deposit $10. Terms apply.",
        expiration: "7 days",
        gameRestrictions: "Starburst only",
        exclusive: true,
        highlights: ["200 free spins", "Low wagering", "Popular slot game"]
    },
    {
        id: 6,
        casino: "Gaming Club",
        bonusAmount: "$350",
        bonusType: "Match Bonus",
        percentage: "150%",
        maxBonus: 350,
        wagering: "45x",
        minDeposit: 10,
        freeSpins: 25,
        country: ["CA", "AU"],
        rating: 4.3,
        affiliateLink: "https://gamingclub.com?aff=cbg350&ref=casino-bonus-guide",
        terms: "18+. New players only. 45x wagering requirement. 25 free spins on selected games. Terms apply.",
        expiration: "21 days",
        gameRestrictions: "Slots and table games",
        exclusive: false,
        highlights: ["150% match", "Free spins included", "Established casino"]
    }
];

// Function to get filtered bonuses
function getFilteredBonuses(filters = {}) {
    let filtered = [...bonusData];
    
    // Filter by country
    if (filters.country) {
        filtered = filtered.filter(bonus => bonus.country.includes(filters.country));
    }
    
    // Filter by bonus type
    if (filters.bonusType) {
        filtered = filtered.filter(bonus => bonus.bonusType === filters.bonusType);
    }
    
    // Filter by minimum bonus amount
    if (filters.minAmount) {
        filtered = filtered.filter(bonus => bonus.maxBonus >= filters.minAmount);
    }
    
    // Filter by maximum wagering
    if (filters.maxWagering) {
        filtered = filtered.filter(bonus => {
            const wagering = parseInt(bonus.wagering);
            return wagering <= filters.maxWagering;
        });
    }
    
    // Filter by exclusivity
    if (filters.exclusiveOnly) {
        filtered = filtered.filter(bonus => bonus.exclusive);
    }
    
    // Sort by rating (highest first)
    filtered.sort((a, b) => b.rating - a.rating);
    
    return filtered;
}

// Function to track affiliate clicks
function trackAffiliateClick(casinoName, bonusId) {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'affiliate_click', {
            'casino_name': casinoName,
            'bonus_id': bonusId,
            'timestamp': new Date().toISOString()
        });
    }
    
    // Local storage for analytics
    const clicks = JSON.parse(localStorage.getItem('affiliateClicks') || '[]');
    clicks.push({
        casino: casinoName,
        bonusId: bonusId,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('affiliateClicks', JSON.stringify(clicks));
    
    console.log(`Affiliate click tracked: ${casinoName} - Bonus ${bonusId}`);
}

// Function to get popular bonuses
function getPopularBonuses(limit = 3) {
    return bonusData
        .filter(bonus => bonus.rating >= 4.5)
        .sort((a, b) => b.maxBonus - a.maxBonus)
        .slice(0, limit);
}

// Function to get exclusive bonuses
function getExclusiveBonuses() {
    return bonusData.filter(bonus => bonus.exclusive);
}

// Function to get bonuses by country
function getBonusesByCountry(country) {
    return bonusData.filter(bonus => bonus.country.includes(country));
}

// Function to track bonus impressions
function trackBonusImpression(bonusId) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'bonus_impression', {
            'bonus_id': bonusId,
            'timestamp': new Date().toISOString()
        });
    }
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        bonusData,
        getFilteredBonuses,
        trackAffiliateClick,
        getPopularBonuses,
        getExclusiveBonuses,
        getBonusesByCountry,
        trackBonusImpression
    };
}