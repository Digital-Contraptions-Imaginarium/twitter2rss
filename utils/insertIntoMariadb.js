r => r.map(x => "INSERT IGNORE INTO tweets (id_str, created_at, user_id_str, user_name, user_screen_name, text) VALUES ('" + x.id_str + "', '" + x.created_at.toISOString() + "', '" + x.user.id_str + "', '" + x.user.name.replace(/'/g, "\\'") + "', '" + x.user.screen_name.replace(/'/g, "\\'") + "', '" + x.text.replace(/'/g, "\\'") + "');\nINSERT IGNORE INTO tweets_themes (id_str, theme) VALUES ('" + x.id_str + "', '" + process.env.CONFIGURATION_NAME + "');").join("\n")
