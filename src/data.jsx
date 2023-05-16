export const data = [
  {
    id: "auth_type",
    name: "auth_type",
    type: "text",
    stream: ["Zoho", "Twitter", "Youtube", "Facebook", "Linkedin"],
    header: "credentials",
    label: "Authentication Type",
    required: true,
    readOnly: true,
    initial: {
      Zoho: "auth2",
      Twitter: "auth2",
      Youtube: "api_key",
      Facebook: "api_key",
      Linkedin: "auth2",
    },
    placeholder: "auth2",
  },
  {
    id: "token_url",
    name: "token_url",
    type: "url",
    stream: ["Zoho", "Linkedin"],
    header: "credentials",
    label: "Token URL",
    required: true,
    readOnly: false,
    initial: {
      Zoho: "",
      Twitter: "",
      Youtube: "",
      Facebook: "",
      Linkedin: "",
    },
    // [
    //   {
    //     Zoho:"https://accounts.zoho.com/oauth/v2/token",
    //     Linkedin:"https://www.linkedin.com/oauth/v2/accessToken"
    //   }
    // ],
  },
  {
    id: "base_url",
    name: "base_url",
    type: "text",
    stream: ["Zoho", "Twitter", "Youtube", "Facebook", "Linkedin"],
    header: "credentials",
    label: "Base URL",
    required: true,
    readOnly: true,
    initial: {
      Zoho: "https://people.zoho.com/people/api/",
      Twitter: "https://api.twitter.com/2/",
      Youtube: "https://www.googleapis.com/youtube/v3/",
      Facebook: "https://graph.facebook.com/v3.2/",
      Linkedin: "https://api.linkedin.com/v2/",
    },
  },
  {
    id: "access_token",
    name: "access_token",
    type: "text",
    stream: ["Twitter"],
    header: "credentials",
    label: "Access Token",
    required: true,
    readOnly: true,
    initial: {
      Twitter:
        "AAAAAAAAAAAAAAAAAAAAAJ%2B0XgEAAAAAzdasVMXERc%2BDnO6Xe6mjX1d07l0%3DFJ8jnoMtoauNQVagusUODht7d0H0lKNSTJ1kzSvbmUbjELbmt5",
      Linkedin:
        "AQW6iwtuPC_--C6M8Nttqndcx06ymNmYT44AkUP2AiGkkkWA4V_-d0yoNYwxbK3-zHm8C87zTo2LO3V5Z81o-KLECICisun7E_NwZ0thnJ7dHVZeGcRyW17HSaM_bQWwz8pIw4bvxY5a0-3EKQUxehSuwU2zInpBcPZfssDXM4g25AeYVkLpTjWmtP98fDySpWyJwTswWhs7VB5uDmhZnevuzwPaxgX99Gg1QtWj_LCb9_rpQYPejDMZtcz1VFgDyUc1Y6Oxw6jiKiZtU3Ar_VqyZ1G9-hXFOv4bfHtICinFC7kC5CbEeYUgUVBXBBhgVK-mYMvQBr_KAATRgnYyeMndTWFlzw",
      Youtube: "",
      Facebook: "",
      Zoho: "",
    },
  },
  {
    id: "refresh_token",
    name: "refresh_token",
    type: "text",
    stream: ["Zoho"],
    header: "parameters",
    label: "Refresh Token",
    required: true,
    readOnly: true,
    initial: {
      Zoho: "1000.f965e6ae15e52179ee6ccb5a02e35cf7.df30645966281a9da42bd449607d79f0",
      Twitter: "",
      Linkedin: "",
      Youtube: "",
      Facebook: "",
    },
  },
  {
    id: "client_id",
    name: "client_id",
    type: "text",
    stream: ["Zoho"],
    header: "parameters",
    label: "Client ID",
    required: true,
    readOnly: false,
    initial: {
      Zoho: "",
      Twitter: "",
      Youtube: "",
      Facebook: "",
      Linkedin: "",
    },
    placeholder: "1000.Z4OWM6BIKRB67BECMWF9WZYFXUB8HE",
  },
  {
    id: "client_secret",
    name: "client_secret",
    type: "text",
    stream: ["Zoho"],
    header: "parameters",
    label: "Client Secret",
    required: true,
    readOnly: false,
    initial: {
      Zoho: "",
      Twitter: "",
      Youtube: "",
      Facebook: "",
      Linkedin: "",
    },
    placeholder: "d902f2f611e61fbaea7dbf32522aa2ed48e4f78cc5",
  },
  {
    id: "grant_type",
    name: "grant_type",
    type: "text",
    stream: ["Zoho"],
    header: "parameters",
    label: "Grant Type",
    required: true,
    readOnly: false,
    initial: {
      Zoho: "",
      Twitter: "",
      Youtube: "",
      Facebook: "",
      Linkedin: "",
    },
    placeholder: "refresh_token",
  },
  {
    id: "bucket_name",
    name: "bucket_name",
    type: "text",
    stream: ["Zoho", "Twitter", "Youtube", "Facebook", "Linkedin"],
    header: "path",
    label: "Bucket Name",
    required: true,
    readOnly: false,
    initial: {
      Zoho: "",
      Twitter: "",
      Youtube: "",
      Facebook: "",
      Linkedin: "",
    },
    placeholder: "nithin-first-bucket",
  },
  {
    id: "path_name",
    name: "path_name",
    type: "text",
    stream: ["Zoho", "Twitter", "Youtube", "Facebook", "Linkedin"],
    header: "path",
    label: "Path Name",
    required: true,
    readOnly: true,
    initial: {
      Zoho: "socialmedia/zoho_{file}_records.json",
      Twitter: "socialmedia/twitter_{file}_records.json",
      Youtube: "socialmedia/youtube_{file}_records.json",
      Facebook: "socialmedia/facebook_{file}_records.json",
      Linkedin: "socialmedia/linkedin_{file}_records.json",
    },
  },
  {
    id: "error_path",
    name: "error_path",
    type: "text",
    stream: ["Zoho", "Twitter", "Youtube", "Facebook", "Linkedin"],
    header: "path",
    label: "Error Path",
    required: true,
    readOnly: true,
    initial: {
      Zoho: "socialmedia/error/zoho_{file}_error_response.json",
      Twitter: "socialmedia/error/twitter_{file}_error_response.json",
      Youtube: "socialmedia/error/youtube_{file}_error_response.json",
      Facebook: "socialmedia/error/facebook_{file}_error_response.json",
      Linkedin: "socialmedia/error/linkedin_{file}_error_response.json",
    },
  },
  {
    id: "LifeTime",
    type: "select",
    name: "life_time",
    stream: ["Youtube", "Linkedin"],
    header: "Endpoint",
    label: "LifeTime",
    required: true,

    placeholder: "",
  },
  {
    id: "TimeBound",
    type: "select",
    name: "time_bound",
    stream: ["Youtube", "Linkedin"],
    header: "Endpoint",
    label: "TimeBound",
    required: true,

    placeholder: "",
  },
];

export const endpoint = [
  {
    label: "personal_profile",

    value: "test",

    stream: "Linkedin",

    type: "LifeTime",
  },

  {
    label: "memb_org_access_ctrl",

    value: "organizationAcls?q=roleAssignee",

    stream: "Linkedin",

    type: "LifeTime",
  },

  {
    label: "find_org_admin",

    value:
      "organizationAcls?q=organization&organization={organization_URN}&role=ADMINISTRATOR&state=APPROVED",

    stream: "Linkedin",

    type: "LifeTime",
  },

  {
    label: "find_org_access_ctrl",

    value: "organizationAcls?q=organization&organization={organization_URN}",

    stream: "Linkedin",

    type: "LifeTime",
  },

  {
    label: "org_details",

    value: "organizations/{organization_id}",

    stream: "Linkedin",

    type: "LifeTime",
  },

  {
    label: "lifetime_follow_stat",

    value:
      "organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity={organization_URN}",

    stream: "Linkedin",

    type: "LifeTime",
  },
  {
    label: "timebound_follow_stat",

    value:
      "organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity={organization_URN}&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start={start_time}&timeIntervals.timeRange.end={end_time}",

    stream: "Linkedin",

    type: "TimeBound",
  },
  {
    label: "lifetime_org_page_stat",

    value:
      "organizationPageStatistics?q=organization&organization={organization_URN}",

    stream: "Linkedin",

    type: "LifeTime",
  },
  {
    label: "timebound_org_page_stat",

    value:
      "organizationPageStatistics?q=organization&organization={organization_URN}&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start={start_time}&timeIntervals.timeRange.end={end_time}",

    stream: "Linkedin",

    type: "TimeBound",
  },
  {
    label: "lifetime_share_stat",

    value:
      "organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity={organization_URN}",

    stream: "Linkedin",

    type: "LifeTime",
  },
  {
    label: "timebound_share_stat",

    value:
      "organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity={organization_URN}&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start={start_time}&timeIntervals.timeRange.end={end_time}",

    stream: "Linkedin",

    type: "TimeBound",
  },
  {
    label: "networksize",

    value: "networkSizes/{organization_URN}?edgeType=CompanyFollowedByMember",

    stream: "Linkedin",

    type: "LifeTime",
  },
  {
    label: "share_id",

    value:
      "shares?q=owners&owners={organization_URN}&sortBy=LAST_MODIFIED&sharesPerOwner=100",

    stream: "Linkedin",

    type: "LifeTime",
  },
  {
    label: "retrieve_social_actions",

    value: "socialActions/{commentUrn}",

    stream: "Linkedin",

    type: "LifeTime",
  },
  {
    label: "retrieve_like_on_shares",

    value: "socialActions/{commentUrn}/likes",

    stream: "Linkedin",

    type: "LifeTime",
  },
  {
    label: "retrieve_comments_on_shares",

    value: "socialActions/{commentUrn}/comments",

    stream: "Linkedin",

    type: "LifeTime",
  },
  {
    label: "retrieve_comments_on_comments",

    value: "socialActions/{commentUrn}/comments/{commentId}",

    stream: "Linkedin",

    type: "LifeTime",
  },
  {
    label: "reaction",

    value: "socialMetadata/{commentUrn}",

    stream: "Linkedin",

    type: "LifeTime",
  },
  {
    label: "personal_profile",

    value: "test",

    stream: "Youtube",

    type: "LifeTime",
  },
];

// export const stream = [
//   {
//     id: 1,

//     name: "Zoho",
//   },

//   {
//     id: 2,

//     name: "Twitter",
//   },
//   {
//     id: 3,

//     name: "Youtube",
//   },
//   {
//     id: 4,

//     name: "Facebook",
//   },
//   {
//     id: 5,

//     name: "Linkedin",
//   },
// ];
