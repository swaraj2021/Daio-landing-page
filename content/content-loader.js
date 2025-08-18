/**
 * DAIO Content Management System
 * Loads content from JSON files and injects it into the HTML
 */

class ContentManager {
    constructor() {
        this.config = null;
        this.content = {};
        this.loaded = false;
    }

    async init() {
        try {
            // Load the main configuration
            await this.loadConfig();
            
            // Load all content files
            await this.loadAllContent();
            
            // Inject content into the page
            this.injectContent();
            
            this.loaded = true;
            console.log('Content management system initialized successfully');
        } catch (error) {
            console.error('Failed to initialize content management system:', error);
        }
    }

    async loadConfig() {
        const response = await fetch('content/config.json');
        this.config = await response.json();
    }

    async loadAllContent() {
        const contentPromises = Object.entries(this.config.sections).map(async ([key, path]) => {
            try {
                const response = await fetch(path);
                this.content[key] = await response.json();
            } catch (error) {
                console.error(`Failed to load content for ${key}:`, error);
                this.content[key] = null;
            }
        });

        await Promise.all(contentPromises);
    }

    injectContent() {
        // Update page title
        if (this.config.site.title) {
            document.title = this.config.site.title;
        }

        // Inject navigation
        this.injectNavigation();
        
        // Inject hero section
        this.injectHero();
        
        // Inject problem section
        this.injectProblem();
        
        // Inject solution section
        this.injectSolution();
        
        // Inject market section
        this.injectMarket();
        
        // Inject product section
        this.injectProduct();
        
        // Inject roadmap section
        this.injectRoadmap();
        
        // Inject GTM section
        this.injectGTM();
        
        // Inject moonshot section
        this.injectMoonshot();
        
        // Inject news section
        this.injectNews();
        
        // Inject contact section
        this.injectContact();
        
        // Inject footer
        this.injectFooter();
        
        // Inject chatbot
        this.injectChatbot();
    }

    injectNavigation() {
        if (!this.content.navigation) return;
        
        const nav = this.content.navigation;
        
        // Update brand
        const brandElement = document.querySelector('.nav-logo h2');
        if (brandElement) {
            brandElement.textContent = nav.brand;
        }
        
        // Update menu items
        const menuElement = document.querySelector('.nav-menu');
        if (menuElement) {
            menuElement.innerHTML = nav.menuItems.map(item => 
                `<li><a href="${item.href}">${item.text}</a></li>`
            ).join('');
        }
    }

    injectHero() {
        if (!this.content.hero) return;
        
        const hero = this.content.hero;
        
        // Update title
        const titleElement = document.querySelector('.hero h1');
        if (titleElement) {
            titleElement.textContent = hero.title;
        }
        
        // Update tagline
        const taglineElement = document.querySelector('.hero-tagline');
        if (taglineElement) {
            taglineElement.innerHTML = hero.tagline;
        }
        
        // Update buttons
        const buttonsContainer = document.querySelector('.hero-buttons');
        if (buttonsContainer) {
            buttonsContainer.innerHTML = hero.buttons.map(button => 
                `<a href="${button.href}" class="${button.class}">${button.text}</a>`
            ).join('');
        }
        
        // Update image
        const imageElement = document.querySelector('.hero-image');
        if (imageElement && hero.image) {
            imageElement.src = hero.image.src;
            imageElement.alt = hero.image.alt;
        }
    }

    injectProblem() {
        if (!this.content.problem) return;
        
        const problem = this.content.problem;
        
        // Update header
        const headerTitle = document.querySelector('#problem .section-header h2');
        const headerSubtitle = document.querySelector('#problem .section-header p');
        
        if (headerTitle) headerTitle.textContent = problem.header.title;
        if (headerSubtitle) headerSubtitle.textContent = problem.header.subtitle;
        
        // Update layers
        const layersContainer = document.querySelector('.problem-layers');
        if (layersContainer) {
            layersContainer.innerHTML = problem.layers.map(layer => `
                <div class="layer ${layer.type}">
                    <div class="layer-header">
                        <h3>${layer.title}</h3>
                        <span class="layer-subtitle">${layer.subtitle}</span>
                    </div>
                    <div class="layer-content">
                        <h4>${layer.problem}</h4>
                        <ul>
                            ${layer.points.map(point => `<li>${point}</li>`).join('')}
                        </ul>
                        <div class="impact-statement">
                            <strong>Impact:</strong> ${layer.impact}
                        </div>
                        <div class="supporting-data">
                            ${layer.supportingData}
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        // Update summary
        const summary = problem.summary;
        const summaryTitle = document.querySelector('.problem-summary h3');
        const summaryLeft = document.querySelector('.summary-left p');
        const summaryRight = document.querySelector('.summary-right p');
        const realityCheck = document.querySelector('.reality-check p');
        
        if (summaryTitle) summaryTitle.textContent = summary.title;
        if (summaryLeft) summaryLeft.innerHTML = summary.left;
        if (summaryRight) summaryRight.innerHTML = summary.right;
        if (realityCheck) realityCheck.innerHTML = summary.realityCheck;
    }

    injectSolution() {
        if (!this.content.solution) return;
        
        const solution = this.content.solution;
        
        // Update header
        const headerTitle = document.querySelector('#solution .section-header h2');
        const headerSubtitle = document.querySelector('#solution .section-header p');
        
        if (headerTitle) headerTitle.textContent = solution.header.title;
        if (headerSubtitle) headerSubtitle.textContent = solution.header.subtitle;
        
        // Update pillars
        const pillarsContainer = document.querySelector('.solution-pillars');
        if (pillarsContainer) {
            pillarsContainer.innerHTML = solution.pillars.map(pillar => `
                <div class="pillar ${pillar.type}">
                    <div class="pillar-header">
                        <h3>${pillar.title}</h3>
                        <p>${pillar.description}</p>
                    </div>
                    <div class="pillar-features">
                        <ul>
                            ${pillar.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('');
        }
    }

    injectMarket() {
        if (!this.content.market) return;
        
        const market = this.content.market;
        
        // Update header
        const headerTitle = document.querySelector('#market .section-header h2');
        const headerSubtitle = document.querySelector('#market .section-header p');
        
        if (headerTitle) headerTitle.textContent = market.header.title;
        if (headerSubtitle) headerSubtitle.textContent = market.header.subtitle;
        
        // Update opportunities
        const opportunitiesContainer = document.querySelector('.market-opportunities');
        if (opportunitiesContainer) {
            opportunitiesContainer.innerHTML = market.opportunities.map(opportunity => `
                <div class="opportunity-card">
                    <h3>${opportunity.title}</h3>
                    <p>${opportunity.description}</p>
                    <div class="chart-container">
                        <canvas id="${opportunity.chartId}"></canvas>
                    </div>
                    <p class="source">${opportunity.source}</p>
                </div>
            `).join('');
        }
    }

    injectProduct() {
        if (!this.content.product) return;
        
        const product = this.content.product;
        
        // Update header
        const headerTitle = document.querySelector('#product .section-header h2');
        const headerSubtitle = document.querySelector('#product .section-header p');
        
        if (headerTitle) headerTitle.textContent = product.header.title;
        if (headerSubtitle) headerSubtitle.textContent = product.header.subtitle;
        
        // Update tiers
        const tiersContainer = document.querySelector('.product-tiers');
        if (tiersContainer) {
            tiersContainer.innerHTML = product.tiers.map(tier => `
                <div class="tier ${tier.type}">
                    <div class="tier-header">
                        <h3>${tier.title}</h3>
                    </div>
                    <div class="tier-features">
                        <ul>
                            ${tier.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="tier-buttons">
                        ${tier.buttons.map(button => {
                            if (button.icon) {
                                return `<button class="${button.class}">
                                    <i class="${button.icon}"></i>
                                    ${button.text}
                                </button>`;
                            } else if (button.class === 'cube-icon') {
                                return `<div class="cube-icon">
                                    <i class="fas fa-cube"></i>
                                    <span>${button.text}</span>
                                </div>`;
                            } else {
                                return `<button class="${button.class}">${button.text}</button>`;
                            }
                        }).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    injectRoadmap() {
        if (!this.content.roadmap) return;
        
        const roadmap = this.content.roadmap;
        
        // Update header
        const headerTitle = document.querySelector('#roadmap .section-header h2');
        const headerSubtitle = document.querySelector('#roadmap .section-header p');
        
        if (headerTitle) headerTitle.textContent = roadmap.header.title;
        if (headerSubtitle) headerSubtitle.textContent = roadmap.header.subtitle;
        
        // Update timeline
        const timelineHeader = document.querySelector('.timeline-header span');
        if (timelineHeader) timelineHeader.textContent = roadmap.timeline.header;
        
        const quartersContainer = document.querySelector('.timeline-quarters');
        if (quartersContainer) {
            quartersContainer.innerHTML = roadmap.timeline.quarters.map(q => 
                `<div class="quarter q${q.period.toLowerCase()}-${q.year}">${q.period}</div>`
            ).join('');
        }
        
        const markerElement = document.querySelector('.timeline-marker span');
        if (markerElement) markerElement.textContent = roadmap.timeline.marker;
        
        // Update details
        const detailsContainer = document.querySelector('.roadmap-details');
        if (detailsContainer) {
            detailsContainer.innerHTML = roadmap.details.map(detail => {
                if (detail.type === 'team') {
                    return `
                        <div class="detail-row">
                            <div class="row-header">${detail.header}</div>
                            <div class="team-size">
                                ${detail.items.map(item => `
                                    <div class="size-item ${item.status}">
                                        <span class="size-number">${item.number}</span>
                                        <span class="size-label">${item.label}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="detail-row">
                            <div class="row-header">${detail.header}</div>
                            ${detail.items.map(item => `
                                <div class="${detail.header.toLowerCase().replace(/\s+/g, '-')}-item ${item.status}">${item.text}</div>
                            `).join('')}
                        </div>
                    `;
                }
            }).join('');
        }
        
        // Update legend
        const legendContainer = document.querySelector('.legend');
        if (legendContainer) {
            legendContainer.innerHTML = roadmap.legend.map(item => `
                <div class="legend-item">
                    <span class="legend-color ${item.status}"></span>
                    <span>${item.label}</span>
                </div>
            `).join('');
        }
    }

    injectGTM() {
        if (!this.content.gtm) return;
        
        const gtm = this.content.gtm;
        
        // Update header
        const headerTitle = document.querySelector('#gtm .section-header h2');
        const headerSubtitle = document.querySelector('#gtm .section-header p');
        
        if (headerTitle) headerTitle.textContent = gtm.header.title;
        if (headerSubtitle) headerSubtitle.textContent = gtm.header.subtitle;
        
        // Update left side content
        const leftContainer = document.querySelector('.gtm-left');
        if (leftContainer) {
            leftContainer.innerHTML = `
                <div class="gtm-goal">
                    <h3>${gtm.left.goal.title}</h3>
                    <p>${gtm.left.goal.description}</p>
                </div>
                <div class="gtm-target">
                    <h3>${gtm.left.target.title}</h3>
                    <div class="target-segments">
                        ${gtm.left.target.segments.map(segment => `
                            <div class="segment ${segment.type}">
                                <h4>${segment.title}</h4>
                                <p>${segment.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="gtm-penetration">
                    <h3>${gtm.left.penetration.title}</h3>
                    <p>${gtm.left.penetration.description}</p>
                </div>
                <div class="gtm-timeline">
                    <h3>${gtm.left.timeline.title}</h3>
                    <div class="timeline-phases">
                        ${gtm.left.timeline.phases.map(phase => `
                            <div class="phase">
                                <h4>${phase.title}</h4>
                                <p><strong>Activities:</strong> ${phase.activities}</p>
                                <p><strong>Goal:</strong> ${phase.goal}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="gtm-channels">
                    <h3>${gtm.left.channels.title}</h3>
                    <div class="channel-breakdown">
                        ${gtm.left.channels.breakdown.map(channel => `
                            <div class="channel">
                                <span class="percentage">${channel.percentage}</span>
                                <span class="channel-name">${channel.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        // Update right side content
        const rightContainer = document.querySelector('.gtm-right');
        if (rightContainer) {
            rightContainer.innerHTML = `
                <div class="arr-projection">
                    <h3>${gtm.right.arrProjection.title}</h3>
                    <div class="chart-container">
                        <canvas id="${gtm.right.arrProjection.chartId}"></canvas>
                    </div>
                </div>
                <div class="capital-gains">
                    <h3>${gtm.right.capitalGains.title}</h3>
                    <ul>
                        ${gtm.right.capitalGains.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="revenue-streams">
                    <h3>${gtm.right.revenueStreams.title}</h3>
                    <ul>
                        ${gtm.right.revenueStreams.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="assumptions">
                    <h3>${gtm.right.assumptions.title}</h3>
                    <ul>
                        ${gtm.right.assumptions.items.map(item => `<li><strong>${item.label}</strong> ${item.value}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    }

    injectMoonshot() {
        if (!this.content.moonshot) return;
        
        const moonshot = this.content.moonshot;
        
        // Update title
        const titleElement = document.querySelector('#moonshot h2');
        if (titleElement) {
            titleElement.textContent = moonshot.title;
        }
        
        // Update points
        const pointsContainer = document.querySelector('#moonshot ul');
        if (pointsContainer) {
            pointsContainer.innerHTML = moonshot.points.map(point => 
                `<li>${point}</li>`
            ).join('');
        }
    }

    injectNews() {
        if (!this.content.news) return;
        
        const news = this.content.news;
        
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
        
        if (featuredImage) featuredImage.src = featuredArticle.image;
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
                        <img src="${article.image}" alt="${article.title}">
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
    }

    injectContact() {
        if (!this.content.contact) return;
        
        const contact = this.content.contact;
        
        // Update header
        const headerTitle = document.querySelector('#contact .section-header h2');
        const headerSubtitle = document.querySelector('#contact .section-header p');
        
        if (headerTitle) headerTitle.textContent = contact.header.title;
        if (headerSubtitle) headerSubtitle.textContent = contact.header.subtitle;
        
        // Update contact info
        const infoContainer = document.querySelector('.contact-info');
        if (infoContainer) {
            infoContainer.innerHTML = contact.info.map(item => `
                <div class="contact-item">
                    <div class="contact-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <div>
                        <h3>${item.title}</h3>
                        <p>${item.value}</p>
                    </div>
                </div>
            `).join('');
        }
        
        // Update form
        const formContainer = document.querySelector('#contactForm');
        if (formContainer) {
            formContainer.innerHTML = contact.form.fields.map(field => {
                if (field.type === 'select') {
                    return `
                        <div class="form-group">
                            <label for="${field.id}">${field.label}</label>
                            <select id="${field.id}" name="${field.name}" ${field.required ? 'required' : ''}>
                                ${field.options.map(option => 
                                    `<option value="${option.value}">${option.text}</option>`
                                ).join('')}
                            </select>
                        </div>
                    `;
                } else if (field.type === 'textarea') {
                    return `
                        <div class="form-group">
                            <label for="${field.id}">${field.label}</label>
                            <textarea id="${field.id}" name="${field.name}" rows="${field.rows}" ${field.required ? 'required' : ''} placeholder="${field.placeholder}"></textarea>
                        </div>
                    `;
                } else {
                    return `
                        <div class="form-group">
                            <label for="${field.id}">${field.label}</label>
                            <input type="${field.type}" id="${field.id}" name="${field.name}" ${field.required ? 'required' : ''}>
                        </div>
                    `;
                }
            }).join('') + `
                <button type="submit" class="${contact.form.submitButton.class}">${contact.form.submitButton.text}</button>
            `;
        }
    }

    injectFooter() {
        if (!this.content.footer) return;
        
        const footer = this.content.footer;
        
        // Update brand
        const brandElement = document.querySelector('.footer-section h3');
        if (brandElement) {
            brandElement.textContent = footer.brand.name;
        }
        
        const taglineElement = document.querySelector('.footer-section p');
        if (taglineElement) {
            taglineElement.textContent = footer.brand.tagline;
        }
        
        // Update social links
        const socialContainer = document.querySelector('.social-links');
        if (socialContainer) {
            socialContainer.innerHTML = footer.socialLinks.map(link => 
                `<a href="${link.href}"><i class="${link.icon}"></i></a>`
            ).join('');
        }
        
        // Update sections
        const sectionsContainer = document.querySelectorAll('.footer-section');
        footer.sections.forEach((section, index) => {
            if (sectionsContainer[index + 1]) { // Skip first section (brand)
                const sectionElement = sectionsContainer[index + 1];
                const titleElement = sectionElement.querySelector('h4');
                const linksElement = sectionElement.querySelector('ul');
                
                if (titleElement) titleElement.textContent = section.title;
                if (linksElement) {
                    linksElement.innerHTML = section.links.map(link => 
                        `<li><a href="${link.href}">${link.text}</a></li>`
                    ).join('');
                }
            }
        });
        
        // Update copyright
        const copyrightElement = document.querySelector('.footer-bottom p');
        if (copyrightElement) {
            copyrightElement.innerHTML = footer.copyright;
        }
    }

    injectChatbot() {
        if (!this.content.chatbot) return;
        
        const chatbot = this.content.chatbot;
        
        // Update title
        const titleElement = document.querySelector('.chatbot-title span');
        if (titleElement) {
            titleElement.textContent = chatbot.title;
        }
        
        // Update welcome message
        const welcomeElement = document.querySelector('.bot-message .message-content p');
        if (welcomeElement) {
            welcomeElement.textContent = chatbot.welcomeMessage;
        }
        
        // Update input placeholder
        const inputElement = document.querySelector('#chatbotInput');
        if (inputElement) {
            inputElement.placeholder = chatbot.inputPlaceholder;
        }
        
        // Update quick replies
        const quickRepliesContainer = document.querySelector('.chatbot-quick-replies');
        if (quickRepliesContainer) {
            quickRepliesContainer.innerHTML = chatbot.quickReplies.map(reply => 
                `<button class="quick-reply" data-message="${reply.message}">${reply.text}</button>`
            ).join('');
        }
        
        // Update trigger text
        const triggerElement = document.querySelector('.trigger-text');
        if (triggerElement) {
            triggerElement.textContent = chatbot.triggerText;
        }
    }

    // Method to update specific content section
    async updateSection(sectionName) {
        try {
            const response = await fetch(this.config.sections[sectionName]);
            this.content[sectionName] = await response.json();
            
            // Re-inject the specific section
            switch(sectionName) {
                case 'navigation':
                    this.injectNavigation();
                    break;
                case 'hero':
                    this.injectHero();
                    break;
                case 'problem':
                    this.injectProblem();
                    break;
                case 'solution':
                    this.injectSolution();
                    break;
                case 'market':
                    this.injectMarket();
                    break;
                case 'product':
                    this.injectProduct();
                    break;
                case 'roadmap':
                    this.injectRoadmap();
                    break;
                case 'gtm':
                    this.injectGTM();
                    break;
                case 'moonshot':
                    this.injectMoonshot();
                    break;
                case 'news':
                    this.injectNews();
                    break;
                case 'contact':
                    this.injectContact();
                    break;
                case 'footer':
                    this.injectFooter();
                    break;
                case 'chatbot':
                    this.injectChatbot();
                    break;
            }
            
            console.log(`Updated ${sectionName} content`);
        } catch (error) {
            console.error(`Failed to update ${sectionName} content:`, error);
        }
    }
}

// Initialize content manager when DOM is loaded
let contentManager;
document.addEventListener('DOMContentLoaded', function() {
    contentManager = new ContentManager();
    contentManager.init();
});

// Export for global access
window.ContentManager = ContentManager;
window.contentManager = contentManager;
