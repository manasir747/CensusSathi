export interface StateData {
  id: string;
  name: string;
  status: string;
  houseListing: string;
  populationEnumeration: string;
  localNote: string;
  isFrequent?: boolean;
}

export const STATES_DATA: StateData[] = [
  {
    id: "MH",
    name: "Maharashtra",
    status: "Preparation Phase",
    houseListing: "April 2027",
    populationEnumeration: "February 2028",
    localNote: "Citizens will receive additional instructions before enumeration begins.",
    isFrequent: true
  },
  {
    id: "UP",
    name: "Uttar Pradesh",
    status: "Preparation Phase",
    houseListing: "May 2027",
    populationEnumeration: "February 2028",
    localNote: "Keep household information and required documents ready.",
    isFrequent: true
  },
  {
    id: "DL",
    name: "Delhi",
    status: "Upcoming",
    houseListing: "March 2027",
    populationEnumeration: "February 2028",
    localNote: "Residents should watch for local enumeration announcements.",
    isFrequent: true
  },
  {
    id: "KA",
    name: "Karnataka",
    status: "Preparation Phase",
    houseListing: "April 2027",
    populationEnumeration: "February 2028",
    localNote: "Self-enumeration guidance will be available before the enumeration window.",
    isFrequent: true
  },
  {
    id: "KL",
    name: "Kerala",
    status: "Upcoming",
    houseListing: "May 2027",
    populationEnumeration: "February 2028",
    localNote: "Further regional instructions will be announced before the census."
  },
  // Other states with generic dummy data
  {
    id: "AP", name: "Andhra Pradesh", status: "Upcoming", houseListing: "June 2027", populationEnumeration: "February 2028", localNote: "Check local guidelines."
  },
  {
    id: "AR", name: "Arunachal Pradesh", status: "Upcoming", houseListing: "July 2027", populationEnumeration: "February 2028", localNote: "Check local guidelines."
  },
  {
    id: "AS", name: "Assam", status: "Preparation Phase", houseListing: "August 2027", populationEnumeration: "February 2028", localNote: "Please prepare household details."
  },
  {
    id: "BR", name: "Bihar", status: "Preparation Phase", houseListing: "April 2027", populationEnumeration: "February 2028", localNote: "Citizens will be notified shortly."
  },
  {
    id: "CG", name: "Chhattisgarh", status: "Upcoming", houseListing: "May 2027", populationEnumeration: "February 2028", localNote: "Wait for further instructions."
  },
  {
    id: "GJ", name: "Gujarat", status: "Preparation Phase", houseListing: "June 2027", populationEnumeration: "February 2028", localNote: "Keep documents ready."
  },
  {
    id: "HR", name: "Haryana", status: "Upcoming", houseListing: "July 2027", populationEnumeration: "February 2028", localNote: "Check local guidelines."
  },
  {
    id: "HP", name: "Himachal Pradesh", status: "Upcoming", houseListing: "August 2027", populationEnumeration: "February 2028", localNote: "Check local guidelines."
  },
  {
    id: "JH", name: "Jharkhand", status: "Preparation Phase", houseListing: "April 2027", populationEnumeration: "February 2028", localNote: "Citizens will be notified shortly."
  },
  {
    id: "MP", name: "Madhya Pradesh", status: "Upcoming", houseListing: "May 2027", populationEnumeration: "February 2028", localNote: "Wait for further instructions."
  },
  {
    id: "OR", name: "Odisha", status: "Preparation Phase", houseListing: "June 2027", populationEnumeration: "February 2028", localNote: "Keep documents ready."
  },
  {
    id: "PB", name: "Punjab", status: "Upcoming", houseListing: "July 2027", populationEnumeration: "February 2028", localNote: "Check local guidelines."
  },
  {
    id: "RJ", name: "Rajasthan", status: "Upcoming", houseListing: "August 2027", populationEnumeration: "February 2028", localNote: "Check local guidelines."
  },
  {
    id: "TN", name: "Tamil Nadu", status: "Preparation Phase", houseListing: "April 2027", populationEnumeration: "February 2028", localNote: "Citizens will be notified shortly."
  },
  {
    id: "TG", name: "Telangana", status: "Upcoming", houseListing: "May 2027", populationEnumeration: "February 2028", localNote: "Wait for further instructions."
  },
  {
    id: "UK", name: "Uttarakhand", status: "Preparation Phase", houseListing: "June 2027", populationEnumeration: "February 2028", localNote: "Keep documents ready."
  },
  {
    id: "WB", name: "West Bengal", status: "Upcoming", houseListing: "July 2027", populationEnumeration: "February 2028", localNote: "Check local guidelines."
  },
  // UTs
  {
    id: "CH", name: "Chandigarh", status: "Upcoming", houseListing: "August 2027", populationEnumeration: "February 2028", localNote: "Check local guidelines."
  },
  {
    id: "PY", name: "Puducherry", status: "Preparation Phase", houseListing: "April 2027", populationEnumeration: "February 2028", localNote: "Citizens will be notified shortly."
  },
];
