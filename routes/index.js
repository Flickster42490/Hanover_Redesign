var express = require("express");
var router = express.Router();
var portfolioAll = {
  multiFamily: [
    {
      name: "11 NoHo Apartments",
      location: "North Hollywood, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "October 2018",
      saleDate: "Current Investment",
      hanoverEquity: "20%",
      projectCapitalization: "$24,142,000",
      image: false
    },
    {
      name: "Axeltree Apartments",
      location: "Milwaukie, OR",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "June 2018",
      saleDate: "Current Investment",
      hanoverEquity: "27.0%",
      projectCapitalization: "$31,000,000",
      image: true
    },
    {
      name: "Capes at Ventura",
      location: "Ventura, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "May 2018",
      saleDate: "Current Investment",
      hanoverEquity: "10.3%",
      projectCapitalization: "$110,000,000",
      image: true
    },
    {
      name: "Cavanaugh Apartments",
      location: "Seattle, WA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "August 2018",
      saleDate: "Current Investment",
      hanoverEquity: "27.3%",
      projectCapitalization: "$22,000,000",
      image: true
    },
    {
      name: "The Mark Apartments",
      location: "Hayward, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "February 2017",
      saleDate: "Current Investment",
      hanoverEquity: "27.3%",
      projectCapitalization: "$35,000,000",
      image: true
    },
    {
      name: "Mansfield Apartments",
      location: "Hollywood, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "November 2016",
      saleDate: "December 2018",
      hanoverEquity: "27.6%",
      projectCapitalization: "$28,000,000",
      image: true
    },
    {
      name: "Vues on Gordon",
      location: "Hollywood, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "March 2016",
      saleDate: "Current Investment",
      hanoverEquity: "35.3%",
      projectCapitalization: "$21,000,000",
      image: true
    },
    {
      name: "Rancho Azul Apartments",
      location: "San Diego, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "August 2015",
      saleDate: "February 2018",
      hanoverEquity: "25.6%",
      projectCapitalization: "$16,000,000",
      image: true
    },
    {
      name: "Micropolitan at Larchmont Village",
      location: "Hollywood, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "February 2015",
      saleDate: "Current Investment",
      hanoverEquity: "37.1%",
      projectCapitalization: "$15,000,000",
      image: true
    },
    {
      name: "The Bloc Apartments",
      location: "Anaheim, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "October 2015",
      saleDate: "December 2017",
      hanoverEquity: "29.5%",
      projectCapitalization: "$17,000,000",
      image: true
    },
    {
      name: "Gramercy Apartments",
      location: "Anaheim, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "October 2014",
      saleDate: "March 2017",
      hanoverEquity: "24.7%",
      projectCapitalization: "$18,000,000",
      image: true
    },
    {
      name: "The Premier on Burbank",
      location: "Sherman Oaks, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "July 2014",
      saleDate: "September 2016",
      hanoverEquity: "24.9%",
      projectCapitalization: "$13,000,000",
      image: true
    },
    {
      name: "Azul Apartments",
      location: "Anaheim, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "October 2014",
      saleDate: "September 2016",
      hanoverEquity: "24.8%",
      projectCapitalization: "$17,000,000",
      image: true
    },
    {
      name: "Micropolitan at Urban Lights Apartments",
      location: "Los Angeles, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "October 2013",
      saleDate: "March 2016",
      hanoverEquity: "26.3%",
      projectCapitalization: "$18,000,000",
      image: true
    },
    {
      name: "San Antonio Apartments",
      location: "Moutain View, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "December  2012",
      saleDate: "September 2016",
      hanoverEquity: "16.4%",
      projectCapitalization: "$75,000,000",
      image: false
    },
    {
      name: "Civic Apartments",
      location: "Walnut Creek, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "October 2012",
      saleDate: "September 2016",
      hanoverEquity: "16.9%",
      projectCapitalization: "$94,000,000",
      image: false
    },
    {
      name: "Morrison Apartments II",
      location: "Los Angeles, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "May 2011",
      saleDate: "April 2016",
      hanoverEquity: "31.1%",
      projectCapitalization: "$5,000,000",
      image: false
    },
    {
      name: "Morrison Apartments I",
      location: "Los Angeles, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "May 2011",
      saleDate: "April 2016",
      hanoverEquity: "34.7%",
      projectCapitalization: "$5,000,000",
      image: false
    },
    {
      name: "Alexan Littleton Apartments",
      location: "Denver, CO",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "May 2011",
      saleDate: "April 2016",
      hanoverEquity: "21.1%",
      projectCapitalization: "$54,000,000",
      image: false
    },
    {
      name: "The Icon USC Student Housing",
      location: "Los Angeles, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "January 2011",
      saleDate: "January 2014",
      hanoverEquity: "14.9%",
      projectCapitalization: "$34,000,000",
      image: false
    },
    {
      name: "Palacio Apartments",
      location: "Las Vegas, NV",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "November 2010",
      saleDate: "November 2013",
      hanoverEquity: "22.4%",
      projectCapitalization: "$35,000,000",
      image: false
    },
    {
      name: "Loreto Apartments",
      location: "Las Vegas, NV",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "November 2010",
      saleDate: "November 2013",
      hanoverEquity: "23.2%",
      projectCapitalization: "$42,000,000",
      image: false
    },
    {
      name: "Aldrea at Estrella Falls Apt",
      location: "Phoenix, AZ",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "October 2010",
      saleDate: "September 2015",
      hanoverEquity: "18.9%",
      projectCapitalization: "$23,000,000",
      image: false
    },
    {
      name: "University Park Apartments",
      location: "Riverside, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "October 2007",
      saleDate: "October 2009",
      hanoverEquity: "12.4%",
      projectCapitalization: "$45,000,000",
      image: false
    },
    {
      name: "Heritage Square Apartments",
      location: "Riverside, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "October 2007",
      saleDate: "October 2009",
      hanoverEquity: "14.3%",
      projectCapitalization: "$29,000,000",
      image: false
    },
    {
      name: "Fairway Glenn Apartments",
      location: "San Jose, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "April 2007",
      saleDate: "November 2011",
      hanoverEquity: "17.1%",
      projectCapitalization: "$28,000,000",
      image: false
    },
    {
      name: "Century Place",
      location: "Los Angeles, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "December  2006",
      saleDate: "October 2011",
      hanoverEquity: "14.8%",
      projectCapitalization: "$57,000,000",
      image: false
    },
    {
      name: "El Dorado Point",
      location: "Moreno Valley, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "October 2006",
      saleDate: "June 2008",
      hanoverEquity: "19.0%",
      projectCapitalization: "$45,000,000",
      image: false
    },
    {
      name: "Sterling Apartments",
      location: "Los Felix, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "March 2006",
      saleDate: "February 2009",
      hanoverEquity: "19.2%",
      projectCapitalization: "$19,000,000",
      image: false
    },
    {
      name: "Lincoln Oaks",
      location: "Santa Maria, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "May 2005",
      saleDate: "April 2008",
      hanoverEquity: "24.3%",
      projectCapitalization: "$25,000,000",
      image: false
    },
    {
      name: "Harbor Island",
      location: "Alameda, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "September 2005",
      saleDate: "March 2008",
      hanoverEquity: "20.3%",
      projectCapitalization: "$123,000,000",
      image: false
    },
    {
      name: "Bayside Willows",
      location: "Pinole, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "August 2005",
      saleDate: "July 2008",
      hanoverEquity: "26.8%",
      projectCapitalization: "$22,000,000",
      image: false
    },
    {
      name: "Ivy Towne",
      location: "Davis, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "August 2005",
      saleDate: "July 2008",
      hanoverEquity: "28.3%",
      projectCapitalization: "$28,000,000",
      image: false
    },
    {
      name: "Casa de Valencia",
      location: "Napa, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "August 2005",
      saleDate: "July 2008",
      hanoverEquity: "39.8%",
      projectCapitalization: "$9,000,000",
      image: false
    },
    {
      name: "Somerset on Garfield Apartments",
      location: "Montebello, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "December  2004",
      saleDate: "November 2008",
      hanoverEquity: "20.8%",
      projectCapitalization: "$36,000,000",
      image: false
    },
    {
      name: "Vanowen Apartments",
      location: "Van Nuys, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "October 2004",
      saleDate: "March 2007",
      hanoverEquity: "21.5%",
      projectCapitalization: "$5,000,000",
      image: false
    },
    {
      name: "Variel Apartments",
      location: "Canoga Park, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "September 2004",
      saleDate: "March 2007",
      hanoverEquity: "23.0%",
      projectCapitalization: "$8,000,000",
      image: false
    },
    {
      name: "Mountain Vista Apartments",
      location: "Rancho Cucamonga, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "May 2004",
      saleDate: "February 2006",
      hanoverEquity: "18.0%",
      projectCapitalization: "$76,000,000",
      image: false
    },
    {
      name: "Basque Manor Apartments",
      location: "Fullerton, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "March 2004",
      saleDate: "October 2005",
      hanoverEquity: "17.3%",
      projectCapitalization: "$11,000,000",
      image: false
    },
    {
      name: "Arrowhead Apartments",
      location: "Stanton, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "January 2004",
      saleDate: "July 2005",
      hanoverEquity: "19.4%",
      projectCapitalization: "$22,000,000",
      image: false
    },
    {
      name: "Lakewood Manor Apartments",
      location: "Lakewood, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "November 2004",
      saleDate: "January 2006",
      hanoverEquity: "10.2%",
      projectCapitalization: "$77,000,000",
      image: false
    },
    {
      name: "3810 Wilshire",
      location: "Los Angeles, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "September 2003",
      saleDate: "January 2005",
      hanoverEquity: "10.4%",
      projectCapitalization: "$52,000,000",
      image: false
    },
    {
      name: "Park Place Apartments",
      location: "Santa Ana, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "January 2002",
      saleDate: "March 2004",
      hanoverEquity: "18.0%",
      projectCapitalization: "$19,000,000",
      image: false
    },
    {
      name: "Nantucket Apartments",
      location: "Santa Ana, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "December  2001",
      saleDate: "December  2002",
      hanoverEquity: "15.6%",
      projectCapitalization: "$16,000,000",
      image: false
    },
    {
      name: "Gramercy Apts",
      location: "Los Angeles, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "July 2001",
      saleDate: "May 2002",
      hanoverEquity: "18.4%",
      projectCapitalization: "$4,000,000",
      image: false
    },
    {
      name: "Kingsley Apts",
      location: "Los Angeles, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "July 2001",
      saleDate: "April 2002",
      hanoverEquity: "18.5%",
      projectCapitalization: "$8,000,000",
      image: false
    },
    {
      name: "Parthenia Court Apartments",
      location: "Canoga Park, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "June 2001",
      saleDate: "September 2002",
      hanoverEquity: "15.4%",
      projectCapitalization: "$5,000,000",
      image: false
    },
    {
      name: "Palermo",
      location: "Santa Monica, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "May 2001",
      saleDate: "December  2003",
      hanoverEquity: "21.2%",
      projectCapitalization: "$10,000,000",
      image: false
    },
    {
      name: "Verona Apartments",
      location: "Santa Monica, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "April 2001",
      saleDate: "September 2003",
      hanoverEquity: "20.0%",
      projectCapitalization: "$11,000,000",
      image: true
    },
    {
      name: "Livorno Apartments",
      location: "Santa Monica, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "April 2001",
      saleDate: "September 2003",
      hanoverEquity: "20.0%",
      projectCapitalization: "$11,000,000",
      image: true
    },
    {
      name: "Parthenia Plaza Apartments",
      location: "Canoga Park, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "March 2001",
      saleDate: "September 2002",
      hanoverEquity: "16.6%",
      projectCapitalization: "$5,000,000",
      image: false
    },
    {
      name: "Village Grove Apartments",
      location: "Panorama City, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "February 2001",
      saleDate: "March 2002",
      hanoverEquity: "40.5%",
      projectCapitalization: "$2,000,000",
      image: false
    },
    {
      name: "Village Green Apartments",
      location: "Panorama City, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "February 2001",
      saleDate: "February 2002",
      hanoverEquity: "11.3%",
      projectCapitalization: "$11,000,000",
      image: false
    },
    {
      name: "Sandstone Apartments",
      location: "Bellevue, WA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "December  2000",
      saleDate: "August 2002",
      hanoverEquity: "13.1%",
      projectCapitalization: "$17,000,000",
      image: false
    },
    {
      name: "La Fayette Park Place Apts.",
      location: "Los Angeles, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "December  2000",
      saleDate: "March 2002",
      hanoverEquity: "17.8%",
      projectCapitalization: "$6,000,000",
      image: false
    },
    {
      name: "Playa del Rey",
      location: "Playa del Rey, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "September 2000",
      saleDate: "January 2001",
      hanoverEquity: "17.2%",
      projectCapitalization: "$27,000,000",
      image: false
    },
    {
      name: "Colony Park Apartments",
      location: "Azusa, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "June 2000",
      saleDate: "May 2001",
      hanoverEquity: "16.8%",
      projectCapitalization: "$10,000,000",
      image: false
    },
    {
      name: "Revello Apartments",
      location: "Santa Monica, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "March 2000",
      saleDate: "February 2003",
      hanoverEquity: "16.7%",
      projectCapitalization: "$11,000,000",
      image: true
    },
    {
      name: "Oakcrest Villas Apartments",
      location: "Riverside, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "March 2000",
      saleDate: "January 2002",
      hanoverEquity: "19.2%",
      projectCapitalization: "$6,000,000",
      image: false
    },
    {
      name: "Primrose",
      location: "Denver, CO",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "January 2000",
      saleDate: "January 2001",
      hanoverEquity: "20.0%",
      projectCapitalization: "$3,000,000",
      image: false
    },
    {
      name: "Venezia Apartments",
      location: "Santa Monica, CA",
      productType: "Apartment",
      projectType: "Development",
      fundingDate: "October 1999",
      saleDate: "January 2002",
      hanoverEquity: "17.2%",
      projectCapitalization: "$10,000,000",
      image: true
    },
    {
      name: "Villa Manana Apartments",
      location: "Phoenix, AZ",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "December  1999",
      saleDate: "August 2002",
      hanoverEquity: "17.8%",
      projectCapitalization: "$13,000,000",
      image: false
    },
    {
      name: "Park View Apartments",
      location: "Reseda, CA",
      productType: "Apartment",
      projectType: "Value-Add",
      fundingDate: "October 1999",
      saleDate: "May 2000",
      hanoverEquity: "17.5%",
      projectCapitalization: "$6,000,000",
      image: false
    }
  ],
  netLease: [
    {
      name: "Learning Care Group - Raleigh",
      location: "Raleigh, NC",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "January 2019",
      saleDate: "Current Investment",
      hanoverEquity: "18.3%",
      projectCapitalization: "$4,380,500",
      image: false
    },
    {
      name: "Learning Care Group - Apex",
      location: "Apex, NC",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "April 2018",
      saleDate: "Current Investment",
      hanoverEquity: "18.6%",
      projectCapitalization: "$5,000,000",
      image: true
    },
    {
      name: "6140 Lake Murray Starbucks",
      location: "La Mesa, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "October 2016",
      saleDate: "March 2018",
      hanoverEquity: "28.0%",
      projectCapitalization: "$3,000,000",
      image: true
    },
    {
      name: "Palmdale Plaza",
      location: "Palmdale, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "April 2016",
      saleDate: "May 2018",
      hanoverEquity: "34.2%",
      projectCapitalization: "$16,067,000",
      image: true
    },
    {
      name: "Madison Plaza",
      location: "Riverside, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "February 2016",
      saleDate: "October 2018",
      hanoverEquity: "38.3%",
      projectCapitalization: "$20,000,000",
      image: true
    },
    {
      name: "Lake Elsinore Center",
      location: "Lake Elsinore, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "June 2016",
      saleDate: "Current Investment",
      hanoverEquity: "41.9%",
      projectCapitalization: "$27,000,000",
      image: true
    },
    {
      name: "Orland Park Center",
      location: "Orland Park, IL",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "October 2015",
      saleDate: "March 2017",
      hanoverEquity: "20.0%",
      projectCapitalization: "$6,000,000",
      image: true
    },
    {
      name: "Pioneer Blvd Starbucks",
      location: "Norwalk, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "September 2015",
      saleDate: "March 2017",
      hanoverEquity: "29.9%",
      projectCapitalization: "$3,000,000",
      image: true
    },
    {
      name: "Bradley Center",
      location: "Bradley, IL",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "August 2015",
      saleDate: "November 2018",
      hanoverEquity: "21.0%",
      projectCapitalization: "$6,000,000",
      image: true
    },
    {
      name: "Arcadia Aldi",
      location: "Arcadia, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "September 2014",
      saleDate: "December  2015",
      hanoverEquity: "33.0%",
      projectCapitalization: "$7,000,000",
      image: true
    },
    {
      name: "Victorville Center",
      location: "Victorville, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "August 2014",
      saleDate: "March 2016",
      hanoverEquity: "30.1%",
      projectCapitalization: "$10,000,000",
      image: true
    },
    {
      name: "Sacramento Smart & Final",
      location: "Sacramento, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "June 2014",
      saleDate: "April 2015",
      hanoverEquity: "33.6%",
      projectCapitalization: "$8,000,000",
      image: false
    },
    {
      name: "Winston Plaza",
      location: "Chicago, IL",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "May 2011",
      saleDate: "June 2017",
      hanoverEquity: "16.3%",
      projectCapitalization: "$40,000,000",
      image: false
    },
    {
      name: "Cap Rock Industrial Portfolio",
      location: "Riverside, CA",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "August 2010",
      saleDate: "September 2012",
      hanoverEquity: "85.1%",
      projectCapitalization: "$5,000,000",
      image: false
    },
    {
      name: "Cinema Place",
      location: "Hayward, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "November 2007",
      saleDate: "November 2009",
      hanoverEquity: "19.7%",
      projectCapitalization: "$16,000,000",
      image: true
    },
    {
      name: "Berg",
      location: "Las Vegas, NV",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "April 2007",
      saleDate: "April 2009",
      hanoverEquity: "22.2%",
      projectCapitalization: "$20,000,000",
      image: false
    },
    {
      name: "Buffalo Park",
      location: "Las Vegas, NV",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "January 2007",
      saleDate: "January 2009",
      hanoverEquity: "13.2%",
      projectCapitalization: "$47,000,000",
      image: false
    },
    {
      name: "Civic Center Plaza",
      location: "San Marcos, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "August 2006",
      saleDate: "October 2011",
      hanoverEquity: "14.8%",
      projectCapitalization: "$13,000,000",
      image: false
    },
    {
      name: "Vineyard Center",
      location: "Rancho Cucamonga, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "December  2005",
      saleDate: "June 2008",
      hanoverEquity: "16.6%",
      projectCapitalization: "$26,000,000",
      image: false
    },
    {
      name: "Clifford Meridian Center",
      location: "Riverside, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "January 2005",
      saleDate: "January 2007",
      hanoverEquity: "18.2%",
      projectCapitalization: "$9,000,000",
      image: false
    },
    {
      name: "Mira Loma Clifford",
      location: "Mira Loma, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "February 2004",
      saleDate: "February 2005",
      hanoverEquity: "19.2%",
      projectCapitalization: "$6,000,000",
      image: false
    },
    {
      name: "Mira Loma Davis",
      location: "Mira Loma, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "February 2004",
      saleDate: "January 2005",
      hanoverEquity: "16.8%",
      projectCapitalization: "$9,000,000",
      image: false
    },
    {
      name: "LMA Industrial Portfolio",
      location: "Pleasanton, CA",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "November 2004",
      saleDate: "March 2007",
      hanoverEquity: "17.8%",
      projectCapitalization: "$32,000,000",
      image: false
    },
    {
      name: "Norwalk WalMart Retail",
      location: "Norwalk, CA",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "March 2003",
      saleDate: "October 2004",
      hanoverEquity: "25.9%",
      projectCapitalization: "$4,000,000",
      image: false
    },
    {
      name: "Pacific Center",
      location: "Tustin, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "October 2003",
      saleDate: "March 2005",
      hanoverEquity: "21.4%",
      projectCapitalization: "$10,000,000",
      image: false
    },
    {
      name: "Mountain View Center",
      location: "Chino, CA",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "July 2003",
      saleDate: "March 2006",
      hanoverEquity: "23.9%",
      projectCapitalization: "$21,000,000",
      image: false
    },
    {
      name: "Wald Center",
      location: "Irvine, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "July 2003",
      saleDate: "December  2004",
      hanoverEquity: "19.4%",
      projectCapitalization: "$9,000,000",
      image: false
    },
    {
      name: "Tustin Center",
      location: "Tustin, CA",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "March 2003",
      saleDate: "April 2005",
      hanoverEquity: "19.0%",
      projectCapitalization: "$19,000,000",
      image: false
    },
    {
      name: "Lambert Park",
      location: "La Habra, CA",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "November 2003",
      saleDate: "March 2005",
      hanoverEquity: "22.8%",
      projectCapitalization: "$16,000,000",
      image: false
    },
    {
      name: "Rancho Cucamonga Industrial",
      location: "Rancho Cucamonga, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "December  2003",
      saleDate: "March 2006",
      hanoverEquity: "15.3%",
      projectCapitalization: "$7,000,000",
      image: false
    },
    {
      name: "Bypass Plaza Retail",
      location: "Colorado Springs, CO",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "December  2002",
      saleDate: "December  2002",
      hanoverEquity: "4.7%",
      projectCapitalization: "$11,000,000",
      image: false
    },
    {
      name: "Seco Canyon Plaza I",
      location: "Santa Clarita, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "June 2001",
      saleDate: "August 2002",
      hanoverEquity: "16.3%",
      projectCapitalization: "$6,000,000",
      image: false
    },
    {
      name: "Fullerton Industrial Park",
      location: "Fullerton, CA",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "January 2001",
      saleDate: "July 2004",
      hanoverEquity: "17.7%",
      projectCapitalization: "$21,000,000",
      image: false
    },
    {
      name: "Dyer Center",
      location: "Santa Ana, CA",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "September 2000",
      saleDate: "May 2002",
      hanoverEquity: "16.2%",
      projectCapitalization: "$12,000,000",
      image: false
    },
    {
      name: "Plaza del Rancho",
      location: "Valencia, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "June 2000",
      saleDate: "June 2002",
      hanoverEquity: "24.9%",
      projectCapitalization: "$8,000,000",
      image: false
    },
    {
      name: "Dyer Street Retail",
      location: "Union City, CA",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "July 1999",
      saleDate: "March 2002",
      hanoverEquity: "21.3%",
      projectCapitalization: "$16,000,000",
      image: false
    },
    {
      name: "Snappy Cheyenne",
      location: "Las Vegas, NV",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "December  1999",
      saleDate: "July 2001",
      hanoverEquity: "25.8%",
      projectCapitalization: "$3,000,000",
      image: false
    },
    {
      name: "Arby's Alma Queen",
      location: "Phoenix, AZ",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "November 1999",
      saleDate: "March 2001",
      hanoverEquity: "20.4%",
      projectCapitalization: "$2,000,000",
      image: false
    },
    {
      name: "San Savaine",
      location: "Mira Loma, CA",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "November 1999",
      saleDate: "January 2001",
      hanoverEquity: "28.7%",
      projectCapitalization: "$7,000,000",
      image: false
    },
    {
      name: "Arby's Val Vista",
      location: "Phoenix, AZ",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "November 1999",
      saleDate: "August 2000",
      hanoverEquity: "11.7%",
      projectCapitalization: "$2,000,000",
      image: false
    },
    {
      name: "Amar Center",
      location: "City of Industry, CA",
      productType: "Net Lease",
      projectType: "Value-Add",
      fundingDate: "August 1999",
      saleDate: "August 2000",
      hanoverEquity: "19.2%",
      projectCapitalization: "$6,000,000",
      image: false
    },
    {
      name: "Snappy Eastern Pebble",
      location: "Las Vegas, NV",
      productType: "Net Lease",
      projectType: "Development",
      fundingDate: "May 1999",
      saleDate: "April 2000",
      hanoverEquity: "19.5%",
      projectCapitalization: "$3,000,000",
      image: false
    }
  ]
};

var bios = {
  Yarmolinsky: {
    name: "Alex Yarmolinsky",
    title: "President / CEO",
    linkedin: "https://www.linkedin.com/in/alexyarmolinsky/",
    email: "mailto:AYarmolinsky@mmcrealestate.com",
    phone: "(650) 842-2226",
    picture: "yarmolinsky.jpg",
    bio:
      "<p>Mr. Yarmolinsky joined Hanover as its President and Chief Executive Officer in 2017.  In this role he has oversight responsibility for all operating activities of the company.   Mr. Yarmolinsky previously served as the Executive Vice President and Chief Financial Officer of Marcus Millichap Company, Hanover’s parent company.  He has been with Marcus and Millichap since 2005 and was responsible for overseeing the entire finance function of MMC, including real estate finance, accounting, taxation and treasury. Since 2010, Mr. Yarmolinsky also served on MMC’s Board of Directors and Investment Committee.</p><p>Prior to joining Marcus and Millichap Company, Mr. Yarmolinsky worked in public accounting at Burr, Pilger and Mayer, where he began his career in 1999.  Mr. Yarmolinsky received Bachelor’s degree from the University of San Francisco and also holds a Master of Science from Golden Gate University.  Mr. Yarmolinsky is a Certified Public Accountant (inactive) and a full member of ULI.</p> "
  },
  Davidson: {
    name: "Mark Davidson",
    title: "Asset Management Director",
    linkedin: "https://www.linkedin.com/in/markdavidson928/",
    email: "mailto:mdavidson@hanoverfinancialllc.com",
    phone: "(424) 653-2523",
    picture: "davidson.jpg",
    bio:
      "<p>Mr. Davidson is a Director of Asset Management at Hanover Financial, LLC. He works with joint venture operating partners to develop and to implement asset management plans. This includes overseeing closings, monitoring developments, budgeting, and participating in dispositions. Prior to joining Hanover in 2015, Mr. Davidson spent the previous eight years at GE Real Estate evaluating and recommending new debt deals, performing real estate valuations, and underwriting West Coast suburban office acquisitions. Prior to GE Real Estate, he worked in institutional real estate consulting at the Townsend Group and in public accounting with Arthur Andersen.</p> <p>Mr. Davidson holds a Bachelor of Arts in Economics from UCLA and a Masters in Business Administration from Duke University’s Fuqua School of Business. Mr. Davidson is a Chartered Financial Analyst and a Certified Public Accountant. Davidson holds a California real estate broker’s license. </p>"
  },
  White: {
    name: "David White",
    title: "Multifamily Sr. Director (Northern California/Seattle/Portland)",
    linkedin: "https://www.linkedin.com/in/david-white-a3593b11/",
    email: "mailto:dwhite@hanoverfinancialllc.com",
    phone: "(415) 519-3434",
    picture: "white.jpg",
    bio:
      "<p>Mr. White serves as Senior Director at Hanover Financial, LLC overseeing the firm’s investment activities in the Bay Area and Pacific Northwest.   Prior to joining Hanover, he served as an Executive Director at PGIM Real Estate responsible for west coast acquisition activities on behalf of PGIM’s open-ended fund series.   Mr. White began his career at KPMG LLP.</p><p>Mr. White holds an MBA from UC Berkeley Haas School of Business and BS degrees in Accounting & Finance from Indiana University’s Kelly School of Business.   Mr. White is a Certified Public Accountant (inactive) and a member of ULI.</p>"
  },
  Chesnie: {
    name: "Nate Chesnie",
    title: "Multifamily Director (Orange County/San Diego)",
    linkedin: "https://www.linkedin.com/in/nathan-chesnie-965a14a/",
    email: "mailto:nchesnie@hanoverfinancialllc.com",
    phone: "(949) 307-6212",
    picture: "chesnie.jpg",
    bio:
      "<p>Mr. Chesnie serves as a Director Acquisitions at Hanover Financial, LLC. He is responsible for identifying and evaluating joint venture equity opportunities for value-add and development multifamily projects in Orange and San Diego Counties. Mr. Chesnie previously spent three years with TMC America originating, structuring, and managing equity investments for single family, multifamily, retail, industrial, and land entitlement transactions. Prior to TMC America, Mr. Chesnie worked at Sabal Financial Group where he acquired and managed distressed commercial real estate across the United States. </p><p>Mr. Chesnie holds a Bachelor of Arts in Finance, with a minor in Real Estate Development and Finance, from The University of Southern California. </p>"
  },
  Baraghoush: {
    name: "Ash Baraghoush",
    title: "Multifamily Director (Los Angeles)",
    linkedin: "https://www.linkedin.com/in/ash-baraghoush-70b49142/",
    email: "mailto:abaraghoush@hanoverfinancialllc.com",
    phone: "(424) 653-2524",
    picture: "baraghoush.jpg",
    bio:
      "<p>Mr. Baraghoush serves as a Director Acquisitions at Hanover Financial, LLC. He is responsible for identifying and evaluating joint venture equity opportunities for value-add and development multifamily projects. Mr. Baraghoush previously spent four years with Ares Management originating and structuring senior mortgages, mezzanine, preferred equity and common equity for multifamily real estate transactions. Prior to Ares, Mr. Baraghoush worked at QVT Mount Auburn Capital and at Hanover Financial Company. Mr. Baraghoush began his career at Bank of America in its Global Corporate Investment Banking division.</p> <p>Mr. Baraghoush holds a Bachelor of Arts in Economics, with a minor in Accounting, from UCLA. </p>"
  },
  Rodiles: {
    name: "John Rodiles",
    title: "NNN Sr. Director",
    linkedin: "https://www.linkedin.com/in/john-rodiles-8156166/",
    email: "mailto:jrodiles@hanoverfinancialllc.com",
    phone: "(424) 653-2527",
    picture: "rodiles.jpg",
    bio:
      "<p>Mr. Rodiles serves as the Senior Director of NNN Investments at Hanover Financial, LLC. He is responsible for identifying joint venture equity opportunities for net leased development and value-add projects throughout the country. In his career, Mr. Rodiles has overseen transactions totaling more than $4 billion in volume as an advisor to institutions, public REITs, and merchant developers in financing and sales disposition capacities. </p><p>Mr. Rodiles previously worked as a senior executive at A10 Capital, a direct lender, where he was responsible in leading the organization’s top grossing Western region. Previous to A10 Capital, he was a senior executive at Marcus & Millichap where he managed in several offices, hundreds of salespeople, and cultivated the top grossing lending office. Mr. Rodiles’ career began in corporate lending at Banc One Leasing Corporation. </p><p>He was responsible for several offices, hundreds of salespeople, and cultivated the top grossing lending office at Marcus & Millichap and top grossing region at A10 Capital. As Vice President of Investments, John focused on the financing and sale of net leased assets. In his time with the above lending institutions he specialized in asset-based lending where he funded various debt and lease structures with companies throughout the Unites States. </p><p>Mr. Rodiles holds a Bachelor of Science in Finance from California State University Long Beach. He is a licensed real estate broker in California and Oregon and an active member of the International Council of Shopping Centers. Outside of work, John enjoys traveling internationally, dedicating time to organizations in his community, and spending time with his wife, Elizabeth, and their three children, Dean, Giuliana, and Marc. </p>"
  },
  Tevrizian: {
    name: "Drew Tevrizian",
    title: "NNN Director",
    linkedin: "https://www.linkedin.com/in/drew-tevrizian-cfa-cpa-a07402a/",
    email: "mailto:dtevrizian@hanoverfinancialllc.com",
    phone: "(424) 653-2521",
    picture: "tevrizian.jpg",
    bio:
      "<p>Mr. Tevrizian serves as a Vice President at Hanover Financial, LLC. He is responsible for identifying and evaluating joint venture equity opportunities for net lease projects. Mr. Tevrizian previously worked in JLL’s Capital Markets division underwriting multifamily projects in the West Coast. He began his career in public accounting with PwC. </p> <p>Mr. Tevrizian holds a Bachelor of Arts in Psychology from the University of Michigan. Mr. Tevrizian is a Chartered Financial Analyst and a Certified Public Accountant. </p>"
  },
  Samaha: {
    name: "Josh Samaha",
    title: "Investment Associate",
    linkedin: "https://www.linkedin.com/in/josh-samaha-89a3741a/",
    email: "mailto:jsamaha@hanoverfinancialllc.com",
    phone: "(650) 842-2215",
    picture: "samaha.jpg",
    bio:
      "<p>Mr. Samaha is an Associate at Hanover Financial, LLC. He is responsible for working with Hanover’s acquisition team in identifying and underwriting new multifamily investment opportunities. Prior to joining Hanover, Mr. Samaha spent four years at The Concord Group consulting on multifamily development projects in the West Coast. </p> <p>Mr. Samaha holds a Bachelor of Arts in Economics from UCLA. </p>"
  },
  Peterson: {
    name: "John Paul Peterson",
    title: "Multifamily Director (Northern California/Seattle/Portland)",
    linkedin: "https://www.linkedin.com/in/johnpaulpeterson/",
    email: "mailto:jpeterson@hanoverfinancialllc.com",
    phone: "(650) 842-2231",
    picture: "peterson.jpg",
    bio:
      "<p>Mr. Peterson serves as a Director at Hanover Financial, LLC.  He is responsible for identifying and evaluating co-investment partnership opportunities with multi-family development sponsors and evaluating investment opportunities.  Mr. Peterson previously spent ten years as a management/engineering consultant leading a team in the design, financial modeling and performance management of commercial, residential and institutional real estate assets throughout the United States and Mainland China.</p><p>Mr. Peterson holds a Bachelor of Science in Mechanical Engineering from Messiah University and a Master of Business Administration from University of California, Berkeley, Haas School of Business.</p>"
  },
  Galen: {
    name: "Joshua Galen",
    title: "Investment Associate",
    linkedin: "https://www.linkedin.com/in/josh-galen-a274ba64/",
    email: "mailto:jgalen@hanoverfinancialllc.com",
    phone: "(424) 653-2529",
    picture: "galen.jpg",
    bio:
      "<p>Mr. Galen is an Investment Associate at Hanover Financial, LLC. He is responsible for working with Hanover’s acquisition team in identifying and underwriting new investment opportunities as well as working with Hanover’s asset management team. Prior to joining Hanover, Mr. Galen spent two years at Silverpeak Argentic where he underwrote loans in fixed rate and floating rate debt.</p><p>Mr. Galen holds a Bachelor of Science in Public Policy, Planning, and Development and a Master of Science in Finance from USC.</p>"
  },
  Xiong: {
    name: "Jachi Xiong",
    title: "Senior Director, Asset Management",
    linkedin: "https://www.linkedin.com/in/jachi-xiong-4575b7/",
    email: "mailto:jxiong@hanoverfinancialllc.com",
    phone: "(650) 842-2252",
    picture: "placeholder.png",
    bio:
      "<p>Ms. Xiong serves as Senior Director of Asset Management at Hanover Financial, LLC overseeing the firm’s investment portfolio. Prior to joining Hanover, she served as a Vice President at AIG Global Real Estate Group with alternating roles of west coast acquisition/development and asset management of portfolios with national footprint. Ms. Xiong began her career as an Architect in P.R. China.</p><p>Ms. Xiong holds an MBA from UC Berkeley Haas School of Business and an Master of Real Estate Development (“MRED”) from University of Southern California.  Ms. Xiong graduated with a BS degree in Architecture from Zhejiang University, P.R China.  Ms. Xiong is a member of ULI.</p>"
  },
  Rodrigues: {
    name: "Ryan Rodrigues",
    title: "Analyst",
    linkedin: "https://www.linkedin.com/in/ryan-rodrigues-70276083/",
    email: "mailto:rrodrigues@hanoverfinancialllc.com",
    phone: "(424) 653-2526",
    picture: "placeholder.png",
    bio:
      "<p>Mr. Rodrigues is an Analyst at Hanover Financial, LLC. He is responsible for working with Hanover’s acquisition team and asset management team and assists with all aspects of the deal cycle from underwriting new investment opportunities to close of escrow on existing deals. Prior to joining Hanover, Mr. Rodrigues spent two years at Colony Capital where he became a utility player and assisted teams dealing with capital markets, foreign exchange and interest rates, insurance, and corporate finance.</p><p>Mr. Rodrigues holds a Bachelor of Science from Columbia University in Financial Economics.</p>"
  },
  Lambert: {
    name: "Julia Lambert",
    title: "Analyst",
    linkedin: "https://www.linkedin.com/in/julia-lambert-097687126/",
    email: "mailto:jlambert@hanoverfinancialllc.com",
    phone: "",
    picture: "placeholder.png",
    bio:
      "<p>Ms. Lambert is an Analyst at Hanover Financial, LLC. She is responsible for working with Hanover’s acquisition team in identifying and underwriting new investment opportunities as well as working with Hanover’s asset management team. Prior to joining Hanover, Ms. Lambert worked at The Concord Group where she consulted on multi-family and office development projects in a variety of US markets.</p><p>Ms. Lambert holds a Bachelor of Science in Civil Engineering, Structures and Construction Emphasis from Stanford University.</p>"
  }
};

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index");
});

router.get("/test", function(req, res, next) {
  res.render("index_test");
});

router.get("/about", function(req, res, next) {
  res.render("about", { page: "about", headerTitle: "Hanover At A Glance" });
});

router.get("/contact", function(req, res, next) {
  res.render("contact", { page: "contact", headerTitle: "Contact Us" });
});

router.get("/home", function(req, res, next) {
  res.render("index");
});

router.get("/login", function(req, res, next) {
  res.render("login");
});

router.get("/portfolio", function(req, res, next) {
  portfolioAll.multiFamily.forEach(function(item) {
    var equity =
      (parseFloat(item.hanoverEquity.slice(0, -1)) / 100) *
      parseInt(item.projectCapitalization.replace(/\D+/g, ""));
    equity = Math.round(equity);
    var formattedEquity = equity
      .toString()
      .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
      .replace(/(\$?)(\d[\d,]+)/g, "$$$2");
    item.formattedEquity = formattedEquity;
  });
  portfolioAll.netLease.forEach(function(item) {
    var equity =
      (parseFloat(item.hanoverEquity.slice(0, -1)) / 100) *
      parseInt(item.projectCapitalization.replace(/\D+/g, ""));
    equity = Math.round(equity);
    var formattedEquity = equity
      .toString()
      .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
      .replace(/(\$?)(\d[\d,]+)/g, "$$$2");
    item.formattedEquity = formattedEquity;
  });
  res.render("portfolio", {
    multiFamily: portfolioAll.multiFamily,
    netLease: portfolioAll.netLease,
    page: "portfolio",
    headerTitle: "Our Portfolio"
  });
});

router.get("/portfolio/multi-family", function(req, res, next) {
  portfolioAll.multiFamily.forEach(function(item) {
    var equity =
      (parseFloat(item.hanoverEquity.slice(0, -1)) / 100) *
      parseInt(item.projectCapitalization.replace(/\D+/g, ""));
    equity = Math.round(equity);
    var formattedEquity = equity
      .toString()
      .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
      .replace(/(\$?)(\d[\d,]+)/g, "$$$2");
    item.formattedEquity = formattedEquity;
  });
  res.render("portfolioMultiFamily", {
    multiFamily: portfolioAll.multiFamily,
    page: "portfolio",
    headerTitle: "Our Portfolio"
  });
});

router.get("/portfolio/net-lease", function(req, res, next) {
  portfolioAll.netLease.forEach(function(item) {
    var equity =
      (parseFloat(item.hanoverEquity.slice(0, -1)) / 100) *
      parseInt(item.projectCapitalization.replace(/\D+/g, ""));
    equity = Math.round(equity);
    var formattedEquity = equity
      .toString()
      .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",")
      .replace(/(\$?)(\d[\d,]+)/g, "$$$2");
    item.formattedEquity = formattedEquity;
  });
  res.render("portfolioNetLease", {
    netLease: portfolioAll.netLease,
    page: "portfolio",
    headerTitle: "Our Portfolio"
  });
});

router.get("/strategies", function(req, res, next) {
  res.render("strategies", {
    page: "strategies",
    headerTitle: "Our Strategies"
  });
});

router.get("/team", function(req, res, next) {
  res.render("team", { page: "team", headerTitle: "Our Team" });
});

router.get("/team/:name", function(req, res, next) {
  var name = req.params.name;
  var person = bios[name];
  res.render("teamMember", { name: name, person: person, page: "team" });
});

router.get("/careers", function(req, res, next) {
  res.render("careers", { page: "careers", headerTitle: "Careers" });
});

router.get("*", function(req, res, next) {
  res.redirect("/");
});

module.exports = router;
