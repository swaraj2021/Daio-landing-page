// News Service for DAIO
class NewsService {
    constructor() {
        this.apiKey = 'your-news-api-key'; // Replace with actual API key
        this.baseUrl = 'https://newsapi.org/v2';
        this.cacheKey = 'daio_news_cache';
        this.cacheExpiry = 4 * 60 * 60 * 1000; // 4 hours in milliseconds
        this.fallbackImages = [
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
            'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
            'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=250&fit=crop',
            'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
            'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop',
            'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop'
        ];
    }

    // Get cached news or fetch new ones
    async getNews() {
        const cached = this.getCachedNews();
        if (cached && !this.isCacheExpired(cached.timestamp)) {
            console.log('Using cached news data');
            return cached.news;
        }

        console.log('Fetching fresh news data');
        return await this.fetchNewsFromAPI();
    }

    // Get cached news from localStorage
    getCachedNews() {
        try {
            const cached = localStorage.getItem(this.cacheKey);
            return cached ? JSON.parse(cached) : null;
        } catch (error) {
            console.error('Error reading cached news:', error);
            return null;
        }
    }

    // Check if cache is expired
    isCacheExpired(timestamp) {
        return Date.now() - timestamp > this.cacheExpiry;
    }

    // Cache news data
    cacheNews(news) {
        try {
            const cacheData = {
                news: news,
                timestamp: Date.now()
            };
            localStorage.setItem(this.cacheKey, JSON.stringify(cacheData));
        } catch (error) {
            console.error('Error caching news:', error);
        }
    }

    // Fetch news from API
    async fetchNewsFromAPI() {
        try {
            // For demo purposes, we'll use fallback data
            // In production, you would use a real news API
            const news = await this.getFallbackNews();
            this.cacheNews(news);
            return news;
        } catch (error) {
            console.error('Error fetching news:', error);
            return this.getFallbackNews();
        }
    }

    // Get fallback news data (for demo purposes)
    async getFallbackNews() {
        const currentDate = new Date();
        
        return {
            header: {
                title: "Latest News & Insights",
                subtitle: "Stay updated with the latest developments in climate finance, greentech, and ESG investing"
            },
            filters: [
                { id: "all", text: "All News", active: true },
                { id: "uk", text: "UK", active: false },
                { id: "usa", text: "USA", active: false },
                { id: "eu", text: "EU", active: false },
                { id: "finance", text: "Finance", active: false },
                { id: "environmental", text: "Environmental", active: false },
                { id: "greentech", text: "Greentech", active: false },
                { id: "climatech", text: "Climatech", active: false }
            ],
            articles: [
                {
                    id: 1,
                    title: "UK Government Announces £1.5B Green Finance Package",
                    excerpt: "The UK government has unveiled a comprehensive green finance package aimed at accelerating the transition to net-zero emissions and supporting climate-friendly investments.",
                    content: "The UK government has unveiled a comprehensive green finance package worth £1.5 billion aimed at accelerating the transition to net-zero emissions and supporting climate-friendly investments. The package includes new funding for green infrastructure projects, enhanced ESG reporting requirements, and incentives for sustainable investment products. Chancellor Jeremy Hunt emphasized that this initiative will position the UK as a global leader in climate finance while creating thousands of green jobs across the country.",
                    source: "Financial Times",
                    date: this.formatDate(new Date(currentDate.getTime() - 1 * 24 * 60 * 60 * 1000)),
                    url: "https://www.ft.com/content/climate-finance-package",
                    image: this.fallbackImages[0],
                    region: "uk",
                    category: "finance",
                    tags: ["uk", "finance", "climatech"],
                    readTime: "3 min read"
                },
                {
                    id: 2,
                    title: "EU Taxonomy Update: New Criteria for Climate Transition",
                    excerpt: "The European Commission has updated its sustainable finance taxonomy with new criteria for climate transition activities, providing clearer guidance for investors.",
                    content: "The European Commission has updated its sustainable finance taxonomy with new criteria for climate transition activities, providing clearer guidance for investors seeking to align their portfolios with climate objectives. The updated taxonomy includes expanded definitions for renewable energy, energy efficiency, and circular economy activities. This move is expected to unlock billions in green investment across the EU while ensuring transparency and preventing greenwashing.",
                    source: "Reuters",
                    date: this.formatDate(new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000)),
                    url: "https://www.reuters.com/business/sustainable-business/eu-taxonomy-update",
                    image: this.fallbackImages[1],
                    region: "eu",
                    category: "finance",
                    tags: ["eu", "finance", "environmental"],
                    readTime: "4 min read"
                },
                {
                    id: 3,
                    title: "US Climate Tech Startups Raise Record $8.2B in Q4",
                    excerpt: "Climate technology startups in the United States have raised a record $8.2 billion in venture capital funding during Q4 2024, signaling strong investor confidence.",
                    content: "Climate technology startups in the United States have raised a record $8.2 billion in venture capital funding during Q4 2024, signaling strong investor confidence in the sector's growth potential. The funding surge was led by companies focused on renewable energy, carbon capture, sustainable agriculture, and electric vehicle infrastructure. Venture capitalists are increasingly recognizing climate tech as one of the most promising investment opportunities of the decade.",
                    source: "TechCrunch",
                    date: this.formatDate(new Date(currentDate.getTime() - 3 * 24 * 60 * 60 * 1000)),
                    url: "https://techcrunch.com/2024/climate-tech-funding",
                    image: this.fallbackImages[2],
                    region: "usa",
                    category: "greentech",
                    tags: ["usa", "greentech", "climatech"],
                    readTime: "5 min read"
                },
                {
                    id: 4,
                    title: "UK Pension Funds Commit to Net-Zero Investment Strategies",
                    excerpt: "Major UK pension funds representing over £300 billion in assets have committed to implementing net-zero investment strategies by 2030.",
                    content: "Major UK pension funds representing over £300 billion in assets have committed to implementing net-zero investment strategies by 2030. The initiative, coordinated by the UK Sustainable Investment and Finance Association, includes commitments to divest from fossil fuels, increase investments in renewable energy, and engage with portfolio companies on climate action. This represents a significant shift in institutional investment priorities toward climate-aligned portfolios.",
                    source: "Pensions & Investments",
                    date: this.formatDate(new Date(currentDate.getTime() - 4 * 24 * 60 * 60 * 1000)),
                    url: "https://www.pionline.com/esg/uk-pension-funds-net-zero",
                    image: this.fallbackImages[3],
                    region: "uk",
                    category: "finance",
                    tags: ["uk", "finance", "environmental"],
                    readTime: "4 min read"
                },
                {
                    id: 5,
                    title: "EU Green Bond Standard Achieves €100B Milestone",
                    excerpt: "The European Union's Green Bond Standard has reached €100 billion in certified issuances, marking a significant milestone in sustainable finance.",
                    content: "The European Union's Green Bond Standard has reached €100 billion in certified issuances, marking a significant milestone in sustainable finance development. The standard, launched in 2021, provides a voluntary framework for green bond issuers to demonstrate their environmental credentials. The milestone reflects growing investor demand for credible, transparent green investment opportunities and the EU's leadership in sustainable finance regulation.",
                    source: "Bloomberg",
                    date: this.formatDate(new Date(currentDate.getTime() - 5 * 24 * 60 * 60 * 1000)),
                    url: "https://www.bloomberg.com/news/articles/eu-green-bonds-milestone",
                    image: this.fallbackImages[4],
                    region: "eu",
                    category: "finance",
                    tags: ["eu", "finance", "climatech"],
                    readTime: "3 min read"
                },
                {
                    id: 6,
                    title: "Federal Reserve Issues Climate Risk Guidelines for Banks",
                    excerpt: "The Federal Reserve has issued comprehensive climate risk management guidelines for financial institutions, marking a significant step in US climate finance regulation.",
                    content: "The Federal Reserve has issued comprehensive climate risk management guidelines for financial institutions, marking a significant step in US climate finance regulation. The guidelines require banks to assess and manage climate-related financial risks, including physical risks from extreme weather events and transition risks from climate policy changes. This represents a major development in the integration of climate considerations into US financial regulation.",
                    source: "Wall Street Journal",
                    date: this.formatDate(new Date(currentDate.getTime() - 6 * 24 * 60 * 60 * 1000)),
                    url: "https://www.wsj.com/articles/fed-climate-risk-guidelines",
                    image: this.fallbackImages[5],
                    region: "usa",
                    category: "finance",
                    tags: ["usa", "finance", "environmental"],
                    readTime: "6 min read"
                },
                {
                    id: 7,
                    title: "UK Climate Tech Accelerator Launches with £50M Fund",
                    excerpt: "A new climate technology accelerator has launched in the UK with a £50 million fund to support early-stage climate tech startups.",
                    content: "A new climate technology accelerator has launched in the UK with a £50 million fund to support early-stage climate tech startups. The accelerator, backed by major UK investors and government funding, will provide funding, mentorship, and access to corporate partners for startups focused on renewable energy, carbon capture, sustainable agriculture, and circular economy solutions. This initiative aims to position the UK as a global leader in climate technology innovation.",
                    source: "Sifted",
                    date: this.formatDate(new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)),
                    url: "https://sifted.eu/articles/uk-climate-tech-accelerator",
                    image: this.fallbackImages[6],
                    region: "uk",
                    category: "greentech",
                    tags: ["uk", "greentech", "climatech"],
                    readTime: "4 min read"
                },
                {
                    id: 8,
                    title: "EU Carbon Border Adjustment Mechanism Takes Effect",
                    excerpt: "The European Union's Carbon Border Adjustment Mechanism (CBAM) has officially taken effect, imposing carbon costs on imported goods.",
                    content: "The European Union's Carbon Border Adjustment Mechanism (CBAM) has officially taken effect, imposing carbon costs on imported goods to prevent carbon leakage and encourage global climate action. The mechanism applies to imports of cement, iron and steel, aluminium, fertilisers, electricity, and hydrogen, requiring importers to purchase CBAM certificates based on the carbon content of their goods. This represents a significant step in the EU's climate policy and could influence global trade patterns.",
                    source: "Euronews",
                    date: this.formatDate(new Date(currentDate.getTime() - 8 * 24 * 60 * 60 * 1000)),
                    url: "https://www.euronews.com/eu-cbam-climate-policy",
                    image: this.fallbackImages[7],
                    region: "eu",
                    category: "environmental",
                    tags: ["eu", "environmental", "climatech"],
                    readTime: "5 min read"
                }
            ],
            featured: {
                title: "Featured Story",
                article: {
                    id: 9,
                    title: "Global Climate Finance Reaches $1.3 Trillion in 2024",
                    excerpt: "Global climate finance flows have reached $1.3 trillion in 2024, marking a 15% increase from the previous year and demonstrating accelerating investment in climate solutions.",
                    content: "Global climate finance flows have reached $1.3 trillion in 2024, marking a 15% increase from the previous year and demonstrating accelerating investment in climate solutions. The growth was driven by increased private sector investment in renewable energy, energy efficiency, and climate adaptation projects. However, the report also highlights that current investment levels remain insufficient to meet the Paris Agreement's climate goals, requiring a tripling of climate finance by 2030.",
                    source: "Climate Policy Initiative",
                    date: this.formatDate(new Date(currentDate.getTime() - 9 * 24 * 60 * 60 * 1000)),
                    url: "https://www.climatepolicyinitiative.org/global-climate-finance-2024",
                    image: this.fallbackImages[0],
                    region: "global",
                    category: "finance",
                    tags: ["global", "finance", "climatech"],
                    readTime: "7 min read"
                }
            }
        };
    }

    // Format date for display
    formatDate(date) {
        return date.toISOString().split('T')[0];
    }

    // Handle image loading errors
    handleImageError(img) {
        const randomIndex = Math.floor(Math.random() * this.fallbackImages.length);
        img.src = this.fallbackImages[randomIndex];
        img.onerror = null; // Prevent infinite loop
    }

    // Start automatic news refresh
    startAutoRefresh() {
        // Refresh news every 4 hours
        setInterval(async () => {
            console.log('Auto-refreshing news...');
            await this.refreshNews();
        }, this.cacheExpiry);

        // Also refresh on page visibility change (when user returns to tab)
        document.addEventListener('visibilitychange', async () => {
            if (!document.hidden) {
                const cached = this.getCachedNews();
                if (cached && this.isCacheExpired(cached.timestamp)) {
                    console.log('Cache expired, refreshing news...');
                    await this.refreshNews();
                }
            }
        });
    }

    // Refresh news and update UI
    async refreshNews() {
        try {
            // Show refresh indicator
            const indicator = document.getElementById('newsRefreshIndicator');
            if (indicator) {
                indicator.style.display = 'flex';
            }
            
            const news = await this.getNews();
            this.updateNewsUI(news);
            
            // Hide refresh indicator after a short delay
            setTimeout(() => {
                if (indicator) {
                    indicator.style.display = 'none';
                }
            }, 1000);
        } catch (error) {
            console.error('Error refreshing news:', error);
            
            // Hide refresh indicator on error
            const indicator = document.getElementById('newsRefreshIndicator');
            if (indicator) {
                indicator.style.display = 'none';
            }
        }
    }

    // Update news UI with new data
    updateNewsUI(news) {
        // Update header
        const headerTitle = document.querySelector('#news .section-header h2');
        const headerSubtitle = document.querySelector('#news .section-header p');
        
        if (headerTitle) headerTitle.textContent = news.header.title;
        if (headerSubtitle) headerSubtitle.textContent = news.header.subtitle;
        
        // Update filters
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach((btn, index) => {
            if (news.filters[index]) {
                btn.textContent = news.filters[index].text;
                btn.dataset.filter = news.filters[index].id;
                if (news.filters[index].active) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            }
        });
        
        // Update featured article
        const featuredArticle = news.featured.article;
        const featuredImage = document.querySelector('.featured-image img');
        const featuredSource = document.querySelector('.featured-content .source');
        const featuredDate = document.querySelector('.featured-content .date');
        const featuredReadTime = document.querySelector('.featured-content .read-time');
        const featuredTitle = document.querySelector('.featured-content h4');
        const featuredExcerpt = document.querySelector('.featured-content p');
        const featuredTags = document.querySelector('.featured-content .article-tags');
        
        if (featuredImage) {
            featuredImage.src = featuredArticle.image;
            featuredImage.onerror = () => this.handleImageError(featuredImage);
        }
        if (featuredSource) featuredSource.textContent = featuredArticle.source;
        if (featuredDate) featuredDate.textContent = new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        if (featuredReadTime) featuredReadTime.textContent = featuredArticle.readTime;
        if (featuredTitle) featuredTitle.textContent = featuredArticle.title;
        if (featuredExcerpt) featuredExcerpt.textContent = featuredArticle.excerpt;
        if (featuredTags) {
            featuredTags.innerHTML = featuredArticle.tags.map(tag => 
                `<span class="tag ${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`
            ).join('');
        }
        
        // Update news grid
        const newsGrid = document.querySelector('.news-grid');
        if (newsGrid) {
            newsGrid.innerHTML = news.articles.map(article => `
                <div class="news-card" data-article-id="${article.id}">
                    <div class="news-card-image">
                        <img src="${article.image}" alt="${article.title}" onerror="window.newsService.handleImageError(this)">
                    </div>
                    <div class="news-card-content">
                        <div class="news-card-meta">
                            <span class="source">${article.source}</span>
                            <span class="date">${new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <h5>${article.title}</h5>
                        <p>${article.excerpt}</p>
                        <div class="news-card-tags">
                            ${article.tags.map(tag => `<span class="tag ${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`).join('')}
                        </div>
                        <button class="btn btn-outline read-more">Read More</button>
                    </div>
                </div>
            `).join('');
        }

        // Reinitialize news functionality
        if (window.initNewsFilters) {
            window.initNewsFilters();
        }
    }
}

// Initialize news service
window.newsService = new NewsService();

// Export for global access
window.NewsService = NewsService;
