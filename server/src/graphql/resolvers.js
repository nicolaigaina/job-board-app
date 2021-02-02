module.exports = {
  Query: {
    jobs: async (parent, args, { dataSources }) => {
      try {
        const jobs = await dataSources.jobsApi.getAllJobs();
        return jobs.map((job) => {
          return {
            id: job.id,
            title: job.title,
            company: {
              name: job.company,
              logo_url: job.company_logo,
              url: job.company_url,
            },
            description: job.description,
            url: job.url,
            location: job.location,
            created_at: job.created_at,
            how_to_apply: job.how_to_apply,
            type: job.type,
          };
        });
      } catch (error) {
        throw error;
      }
    },
    job: async (parent, { id }, { dataSources }) => {
      try {
        const job = await dataSources.jobsApi.getJobById(id);
        return {
          id: job.id,
          title: job.title,
          company: {
            name: job.company,
            logo_url: job.company_logo,
            url: job.company_url,
          },
          description: job.description,
          url: job.url,
          location: job.location,
          created_at: job.created_at,
          how_to_apply: job.how_to_apply,
          type: job.type,
        };
      } catch (error) {
        throw error;
      }
    },
  },
};
