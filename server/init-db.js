const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const path = require('path');

// Create database file
const dbPath = path.join(__dirname, 'daio.db');
const db = new sqlite3.Database(dbPath);

console.log('Initializing DAIO database...');

// Create users table
db.serialize(() => {
    // Create users table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            last_login DATETIME,
            is_active BOOLEAN DEFAULT 1,
            email_verified BOOLEAN DEFAULT 0,
            verification_token TEXT,
            reset_token TEXT,
            reset_token_expires DATETIME
        )
    `, (err) => {
        if (err) {
            console.error('Error creating users table:', err);
        } else {
            console.log('Users table created successfully');
        }
    });

    // Create user_sessions table for remember me functionality
    db.run(`
        CREATE TABLE IF NOT EXISTS user_sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            token TEXT UNIQUE NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            expires_at DATETIME NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    `, (err) => {
        if (err) {
            console.error('Error creating user_sessions table:', err);
        } else {
            console.log('User sessions table created successfully');
        }
    });

    // Create user_profiles table for additional user data
    db.run(`
        CREATE TABLE IF NOT EXISTS user_profiles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER UNIQUE NOT NULL,
            avatar_url TEXT,
            bio TEXT,
            location TEXT,
            website TEXT,
            twitter_handle TEXT,
            linkedin_url TEXT,
            investment_preferences TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    `, (err) => {
        if (err) {
            console.error('Error creating user_profiles table:', err);
        } else {
            console.log('User profiles table created successfully');
        }
    });

    // Insert a test user
    const testUser = {
        name: 'Test User',
        email: 'test@daio.com',
        password: 'password123'
    };

    bcrypt.hash(testUser.password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }

        db.run(`
            INSERT OR IGNORE INTO users (name, email, password, email_verified)
            VALUES (?, ?, ?, ?)
        `, [testUser.name, testUser.email, hash, 1], (err) => {
            if (err) {
                console.error('Error inserting test user:', err);
            } else {
                console.log('Test user created successfully');
                console.log('Email: test@daio.com');
                console.log('Password: password123');
            }
        });
    });

    // Create indexes for better performance
    db.run('CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)', (err) => {
        if (err) {
            console.error('Error creating email index:', err);
        } else {
            console.log('Email index created successfully');
        }
    });

    db.run('CREATE INDEX IF NOT EXISTS idx_sessions_token ON user_sessions(token)', (err) => {
        if (err) {
            console.error('Error creating session token index:', err);
        } else {
            console.log('Session token index created successfully');
        }
    });

    db.run('CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON user_sessions(user_id)', (err) => {
        if (err) {
            console.error('Error creating user_id index:', err);
        } else {
            console.log('User ID index created successfully');
        }
    });
});

// Close database connection
db.close((err) => {
    if (err) {
        console.error('Error closing database:', err);
    } else {
        console.log('Database initialization completed successfully!');
        console.log('Database file created at:', dbPath);
    }
});
