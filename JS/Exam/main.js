document.addEventListener("DOMContentLoaded", () => {
  const findButton = document.getElementById("findButton");
  findButton.addEventListener("click", fetchJobListings);
});

async function fetchJobListings() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const jobContainer = document.getElementById("jobContainer");
  jobContainer.innerHTML = "";

  const apiKey = "2ecc6a18f1msh149a8c93469a116p1ff3e3jsn92ea038f0326";
  const searchUrl = constructSearchUrl(query);

  try {
    const response = await fetch(searchUrl, createFetchOptions(apiKey));
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();

    console.log(result, "result");

    if (result.data && result.data.length > 0) {
      result.data.forEach((job) => {
        generateJobCard(job, jobContainer);
      });
    } else {
      jobContainer.innerHTML = "<p>No job listings found for your query.</p>";
    }
  } catch (error) {
    jobContainer.innerHTML = `<p>Error fetching job listings: ${error.message}</p>`;
  }
}

function constructSearchUrl(query) {
  return `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(
    query
  )}&page=1&num_pages=1&date_posted=all`;
}

function createFetchOptions(apiKey) {
  return {
    method: "GET",
    headers: {
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };
}

function generateJobCard(job, container) {
  const card = document.createElement("div");
  card.classList.add("job-card");

  card.innerHTML = `
    ${
      job.employer_logo
        ? `<img src="${job.employer_logo}" alt="${job.employer} logo">`
        : ""
    }
    <h3>${job.job_job_title}</h3>
    <p><strong>${job.employer}</strong></p>
    <p>${job.city}, ${job.job_country}</p>
    <p class="job-description">${job.job_description}</p>
    <button>Apply Now</button>
  `;

  container.appendChild(card);
}
