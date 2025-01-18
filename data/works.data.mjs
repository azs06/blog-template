export default {
  load() {
    return {
      data: [
        {
          id: 1,
          title: "Jetaport.com",
          description: "Jetaport is a group booking marketplace.",
          org: "Jetaport",
          url: "https://www.crunchbase.com/organization/jetaport",
          tags: ["Vue", "Ember.js", "Laravel"],
          type: "work",
        },
        {
          id: 2,
          title: "ButlerHospitality.com",
          description:
            "Butler Hospitality is an on-demand platform for room service and amenities.",
          org: "Butler Hospitality",
          url: "https://www.crunchbase.com/organization/butler-hospitality",
          tags: ["React", "TypeScript"],
          type: "personal",
        },
        {
          id: 3,
          title: "SkipperHospitality.com",
          description:
            "Butler Hospitality is an on-demand platform for room service and amenities.",
          org: "Butler Hospitality",
          url: "https://www.skipperhospitality.com/",
          tags: ["React", "TypeScript"],
          type: "personal",
        },
      ],
    };
  },
};
