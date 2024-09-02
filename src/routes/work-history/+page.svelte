<script>
    import resume from "$lib/data/resume.json";

    // Function to generate a URL for the company logo based on the company name
    function getCompanyLogoUrl(companyName) {
        return `https://logo.clearbit.com/${companyName.toLowerCase().replace(/\s+/g, "")}.com`;
    }
</script>

<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
    {#each resume.work as job}
        <div class="border p-4 rounded-lg shadow-lg">
            <div class="flex items-center mb-4">
                <img
                    src={getCompanyLogoUrl(job.name)}
                    alt="{job.name} logo"
                    class="w-12 h-12 rounded-full mr-4 object-cover"
                    onError={(e) => (e.target.style.display = "none")}
                />
                <div>
                    <h3 class="text-lg font-bold">{job.position}</h3>
                    <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-blue-500 hover:underline"
                    >
                        {job.name}
                    </a>
                </div>
            </div>
            <div class="text-gray-600">
                <p>{job.location}</p>
                <p>{job.startDate} - {job.endDate}</p>
            </div>
            <div class="mt-2 text-gray-700">
                <p>{job.summary}</p>
            </div>
        </div>
    {/each}
</div>
