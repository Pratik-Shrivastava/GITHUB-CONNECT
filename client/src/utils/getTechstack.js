// utils/github.js

export async function getUserLanguages(username) {
    const baseURL = "https://api.github.com";
    const languageCount = {};

    try {
        // Fetch the repositories of the user
        const reposResponse = await fetch(`${baseURL}/users/${username}/repos?per_page=5`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const repos = await reposResponse.json();

        // Fetch languages for each repository
        await Promise.all(repos.map(async (repo) => {
            const languagesResponse = await fetch(`${baseURL}/repos/${username}/${repo.name}/languages`);
            if (!languagesResponse.ok) throw new Error(`Failed to fetch languages for ${repo.name}`);
            const languages = await languagesResponse.json();

            // Count languages
            Object.keys(languages).forEach(language => {
                if (languageCount[language]) {
                    languageCount[language] += languages[language];
                } else {
                    languageCount[language] = languages[language];
                }
            });
        }));

        // Sort languages by usage frequency and get the top 3
        const sortedLanguages = Object.entries(languageCount)
            .sort((a, b) => b[1] - a[1]) // Sort by count in descending order
            .slice(0, 3) // Get top 3
            .map(([language]) => language); // Extract language names

        return sortedLanguages;
    } catch (error) {
        console.error('Error fetching languages:', error);
        return [];
    }
}
