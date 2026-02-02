<script>
    import resume from "$lib/data/resume.json";
    // Helper function to extract and format the date to Year and Month
    function formatDate(/** @type {string} */ dateString) {
        const date = new Date(dateString);
        const options = /** @type {Intl.DateTimeFormatOptions} */ ({
            year: "numeric",
            month: "short",
        });
        return date.toLocaleDateString(undefined, options);
    }
</script>

<main>
    <div class="flex flex-col justify-center items-center">
        <div class="grid grid-cols-1 gap-6 lg:w-2/3 w-full">
            {#each resume.work as job}
                <div class="p-4 rounded-lg shadow-lg">
                    <div class="flex items-center mb-4">
                        <img
                            src={"/images/" + job.image + ".png"}
                            alt={`${job.name} logo`}
                            class="w-12 h-12 rounded-full mr-4 object-cover"
                            on:error={(/** @type {Event} */ e) => {
                                const target = /** @type {HTMLImageElement} */ (
                                    e.currentTarget
                                );
                                target.style.display = "none";
                            }}
                        />
                        <div>
                            <h3 class="text-lg font-bold">{job.position}</h3>
                            {job.name}
                        </div>
                    </div>
                    <div class="text-gray-600">
                        <p>{job.location}</p>
                        <p>
                            {formatDate(job.startDate)} - {formatDate(
                                job.endDate,
                            )}
                        </p>
                    </div>
                    <div class="mt-2 text-gray-700">
                        <p>{job.summary}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>
