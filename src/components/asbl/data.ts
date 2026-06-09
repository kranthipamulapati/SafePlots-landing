/** @format */

import type { ASBLProjectRow, AsblPoiCategory } from "./types";

export const ASBL_POI_CATEGORIES: AsblPoiCategory[] = [
    {
        id: "office",
        label: "Offices",
        description: "Offices & IT parks",
    },
    {
        id: "school",
        label: "Schools",
        description: "Schools & Colleges",
    },
    {
        id: "transit",
        label: "Transit",
        description: "Metro, Airport, ORR, Bus & Rail",
    },
    {
        id: "dining",
        label: "Dining",
        description: "Cafes & Restaurants",
    },
    {
        id: "mall",
        label: "Malls",
        description: "Shopping Malls",
    },

    {
        id: "hospital",
        label: "Hospitals",
        description: "Hospitals & Major Clinics",
    },
];

export const ASBL_PROJECTS: ASBLProjectRow[] = [
    {
        coordinates: [
            {
                lat: 17.408016202355263,
                lng: 78.3415840163747,
            },
            {
                lat: 17.405473958175378,
                lng: 78.34238748456124,
            },
            {
                lat: 17.405227261308678,
                lng: 78.34178701723454,
            },
            {
                lat: 17.40769143457098,
                lng: 78.34098639413229,
            },
            {
                lat: 17.408016202355263,
                lng: 78.3415840163747,
            },
        ],
        created: "2026-06-06 06:30:56.091Z",
        id: "7j1vhlyrbj1gsv2",
        name: "Loft",
        updated: "2026-06-08 08:38:06.187Z",
        towers_config: [
            {
                apartment_grid: {
                    cells: [
                        ["3", "3"],
                        ["3", "3"],
                        ["3", "3"],
                        ["3", "3"],
                        ["3", "3"],
                    ],
                    columns: 2,
                    rows: 5,
                },
                floor_count: 45,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.406597971171355,
                        lng: 78.34152266923883,
                    },
                    {
                        lat: 17.406673355505205,
                        lng: 78.34176660699453,
                    },
                    {
                        lat: 17.405846648916185,
                        lng: 78.34204344588858,
                    },
                    {
                        lat: 17.405771264582334,
                        lng: 78.34179950813288,
                    },
                ],
                label: "Tower A",
            },
            {
                apartment_grid: {
                    cells: [
                        ["3", "3"],
                        ["3", "3"],
                        ["3", "3"],
                        ["3", "3"],
                        ["3", "3"],
                    ],
                    columns: 2,
                    rows: 5,
                },
                floor_count: 45,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.40760508346895,
                        lng: 78.34118603428342,
                    },
                    {
                        lat: 17.40768028730445,
                        lng: 78.34144050432984,
                    },
                    {
                        lat: 17.40681122595757,
                        lng: 78.34171881644986,
                    },
                    {
                        lat: 17.406736022122068,
                        lng: 78.34146434640344,
                    },
                ],
                label: "Tower B",
            },
        ],
        POI: {
            dining: [
                {
                    location: {
                        lat: 17.4185652,
                        lng: 78.3421268,
                    },
                    name: "The Pool Bar",
                    placeId: "ChIJ_QmYcX-UyzsRtL8E1gu_9Gk",
                },
                {
                    location: {
                        lat: 17.4203021,
                        lng: 78.347528,
                    },
                    name: "Being Hungry",
                    placeId: "ChIJhaOIhIeTyzsR7whYNp8w2BA",
                },
                {
                    location: {
                        lat: 17.4219008,
                        lng: 78.3388496,
                    },
                    name: "Pizza Hut | Kapil Tower, Hyderabad",
                    placeId: "ChIJA-t5h3-TyzsRgKIeUGwKrZM",
                },
                {
                    location: {
                        lat: 17.4216493,
                        lng: 78.3371344,
                    },
                    name: "Zega",
                    placeId: "ChIJX87KoH-TyzsRQsuBjE1I06c",
                },
                {
                    location: {
                        lat: 17.4242119,
                        lng: 78.34432550000001,
                    },
                    name: "Domino's Pizza | GHMC, Hyderabad",
                    placeId: "ChIJv-IDSoGTyzsRl6jZ4L7eGnI",
                },
                {
                    location: {
                        lat: 17.422972,
                        lng: 78.33071,
                    },
                    name: "Citrus Cafe by Lemon Tree",
                    placeId: "ChIJwwRC232TyzsRe7epKuAHGsY",
                },
                {
                    location: {
                        lat: 17.3865749,
                        lng: 78.338489,
                    },
                    name: "Cafe Sandwicho",
                    placeId: "ChIJtdbAwveUyzsRKkuClt4ng2Q",
                },
                {
                    location: {
                        lat: 17.4119941,
                        lng: 78.3422863,
                    },
                    name: "Katha Coffee & Bakehouse | Financial District",
                    placeId: "ChIJVfGKXwCVyzsRAw8S31Hz3uU",
                },
                {
                    location: {
                        lat: 17.4120161,
                        lng: 78.3422369,
                    },
                    name: "Leon's Burgers & Wings Financial District",
                    placeId: "ChIJg5eNH0SVyzsROAWPCitFGUU",
                },
                {
                    location: {
                        lat: 17.4121811,
                        lng: 78.3418891,
                    },
                    name: "Tiger Lily Coffee & Bistro",
                    placeId: "ChIJn9c627OVyzsRANynIW0drTE",
                },
                {
                    location: {
                        lat: 17.4011415,
                        lng: 78.33853789999999,
                    },
                    name: "Cu2 Brewhouse",
                    placeId: "ChIJl7C_sUWVyzsRswR8HC7qYLc",
                },
            ],
            hospital: [
                {
                    location: {
                        lat: 17.416696,
                        lng: 78.3550825,
                    },
                    name: "DR. AMITH REDDY Best KNEE HIP ANKLE FOOT doctor. Robotic Joint Replacement, Sports Injuries, Joint Preservation, Fractures",
                    placeId: "ChIJEQSExH-UyzsRoNSqGYM3dTQ",
                },
                {
                    location: {
                        lat: 17.3864769,
                        lng: 78.3557253,
                    },
                    name: "Nursing Home",
                    placeId: "ChIJs7ER4kWUyzsRNjiUg5HAKso",
                },
                {
                    location: {
                        lat: 17.4175264,
                        lng: 78.3394579,
                    },
                    name: "Continental Hospitals",
                    placeId: "ChIJofXk3n-UyzsRn6fj0rQJygI",
                },
                {
                    location: {
                        lat: 17.4253694,
                        lng: 78.36153379999999,
                    },
                    name: "Ibne Sina Health Centre MANUU",
                    placeId: "ChIJA_mttPSTyzsR607JryN3088",
                },
                {
                    location: {
                        lat: 17.4125282,
                        lng: 78.3364046,
                    },
                    name: "Dr Nityanand Rao Patil | Best Intensivist, Critical Care, Cardiology | Medicover Hospitals, Financial district,Hyderabad",
                    placeId: "ChIJ-UO1YJGTyzsRDcjALzCwyzU",
                },
                {
                    location: {
                        lat: 17.4128318,
                        lng: 78.33576029999999,
                    },
                    name: "Medicover Hospitals Financial District, Hyderabad",
                    placeId: "ChIJNfytawCVyzsRIiiBOlwsJjE",
                },
                {
                    location: {
                        lat: 17.4128545,
                        lng: 78.3357657,
                    },
                    name: "Dr Ramya Nadipineni - Neonatologist & Pediatrician in Financial District",
                    placeId: "ChIJb4g70n6VyzsR4TET_J3Rx0c",
                },
                {
                    location: {
                        lat: 17.4128827,
                        lng: 78.33511659999999,
                    },
                    name: "Megha's Nutrition & Dietitian Clinic",
                    placeId: "ChIJIYMYeBCVyzsRmum3mjdAWmo",
                },
                {
                    location: {
                        lat: 17.4154856,
                        lng: 78.34051459999999,
                    },
                    name: "Medicover clinic",
                    placeId: "ChIJySw_DQCVyzsR8LzLJqrLrDg",
                },
                {
                    location: {
                        lat: 17.4129167,
                        lng: 78.3351252,
                    },
                    name: "Atlas Women's clinic",
                    placeId: "ChIJ-xhOGeqVyzsRXZFnHUBVyUU",
                },
                {
                    location: {
                        lat: 17.4129415,
                        lng: 78.3351066,
                    },
                    name: "Sakar Counselling Centre - Less Sessions Fast Results",
                    placeId: "ChIJ_TzUoFORyzsReIaxpEfwdqQ",
                },
                {
                    location: {
                        lat: 17.4015212,
                        lng: 78.3500864,
                    },
                    name: "Sankara Eye Hospital Nanakramguda",
                    placeId: "ChIJd9qRmx6VyzsR8yHZHKPmuQM",
                },
                {
                    location: {
                        lat: 17.40963,
                        lng: 78.35155999999999,
                    },
                    name: "Dr. Sudip Kumar Pore | Consult With Best General practitioner Doctor Near Me | Uti | 12+ Yrs. of Exp.",
                    placeId: "ChIJuWr12zOVyzsRpes-SrC7ZOQ",
                },
            ],
            mall: [
                {
                    location: {
                        lat: 17.4118982,
                        lng: 78.3421444,
                    },
                    name: "Myscape Stories",
                    placeId: "ChIJrQ37xSqVyzsRc6mqRcRjdTM",
                },
                {
                    location: {
                        lat: 17.4003612,
                        lng: 78.3398879,
                    },
                    name: "Fairmount Golden Mile",
                    placeId: "ChIJ-7thfriVyzsRAHgP4YiWDqw",
                },
                {
                    location: {
                        lat: 17.40007019999999,
                        lng: 78.3401031,
                    },
                    name: "Aria by Fairmount",
                    placeId: "ChIJP7O9PQCVyzsRwIP2v9qybic",
                },
                {
                    location: {
                        lat: 17.3986811,
                        lng: 78.3330436,
                    },
                    name: "Aqua gold plus",
                    placeId: "ChIJMx4r9k6VyzsRvYp2gZ12f3Y",
                },
                {
                    location: {
                        lat: 17.3967663,
                        lng: 78.33477239999999,
                    },
                    name: "NeedFlux",
                    placeId: "ChIJc8rG1jOVyzsRxgAw7wmTjwM",
                },
                {
                    location: {
                        lat: 17.3933135,
                        lng: 78.34062449999999,
                    },
                    name: "MN Corner",
                    placeId: "ChIJuXA6HhqVyzsR7Tnv-0ExY4A",
                },
                {
                    location: {
                        lat: 17.4156521,
                        lng: 78.35492769999999,
                    },
                    name: "RNV Commercial complex",
                    placeId: "ChIJ10qVSHaVyzsRSkInzhbSMGQ",
                },
                {
                    location: {
                        lat: 17.3958168,
                        lng: 78.35292040000002,
                    },
                    name: "Vamsiram Builder Mall and Multiplex",
                    placeId: "ChIJPzdbKg2VyzsRTN6u5pFLtz0",
                },
                {
                    location: {
                        lat: 17.3911897,
                        lng: 78.3437716,
                    },
                    name: "MN Capital",
                    placeId: "ChIJS8xDrl6UyzsR5-anIrlwlGg",
                },
                {
                    location: {
                        lat: 17.3907914,
                        lng: 78.34402589999999,
                    },
                    name: "MN Crux",
                    placeId: "ChIJ-ZUcBgCVyzsROoHZEJpk8x4",
                },
                {
                    location: {
                        lat: 17.3905251,
                        lng: 78.3419492,
                    },
                    name: "SSReftech",
                    placeId: "ChIJo56uAQaVyzsRGPBm6jKVEi8",
                },
                {
                    location: {
                        lat: 17.3903527,
                        lng: 78.3415672,
                    },
                    name: "Sunshine KAY Golden Square",
                    placeId: "ChIJR0_wLQmVyzsRSPbk0f-9KEY",
                },
                {
                    location: {
                        lat: 17.390198,
                        lng: 78.34167839999999,
                    },
                    name: "Essen Presidential",
                    placeId: "ChIJBRM8AniVyzsRiEWatRo9tkE",
                },
                {
                    location: {
                        lat: 17.4238936,
                        lng: 78.3441814,
                    },
                    name: "Anvi's Eco Grand mall",
                    placeId: "ChIJp9vB5ROTyzsRUbnnb9YgQiU",
                },
            ],
            office: [
                {
                    location: {
                        lat: 17.4187031,
                        lng: 78.3375039,
                    },
                    name: "Cyient",
                    placeId: "ChIJFcBWGICUyzsRXIfItvuVWCg",
                },
                {
                    location: {
                        lat: 17.4357059,
                        lng: 78.38314489999999,
                    },
                    name: "International Tech Park Hyderabad.",
                    placeId: "ChIJ6U8bC1iRyzsRq0tMYJgzRYY",
                },
                {
                    location: {
                        lat: 17.4409893,
                        lng: 78.3778951,
                    },
                    name: "Raheja Mindspace IT Park",
                    placeId: "ChIJUZZhw-CTyzsRD1pFBhTNZZk",
                },
                {
                    location: {
                        lat: 17.4137054,
                        lng: 78.3385443,
                    },
                    name: "Prestige SkyTech",
                    placeId: "ChIJxyWCsGWVyzsRR3qVtE-z1qc",
                },
                {
                    location: {
                        lat: 17.4069571,
                        lng: 78.3248473,
                    },
                    name: "IT park PJT",
                    placeId: "ChIJ7YeBrBmVyzsR_QK7Q9YdVOM",
                },
                {
                    location: {
                        lat: 17.4038757,
                        lng: 78.33106029999999,
                    },
                    name: "GAR Infobahn - Inspired by Laxmi",
                    placeId: "ChIJMXWS-46UyzsRFD8a275GD3c",
                },
                {
                    location: {
                        lat: 17.4077255,
                        lng: 78.3254039,
                    },
                    name: "Poojitha Tech Park",
                    placeId: "ChIJKVXvIAKVyzsRE6UTC1ebcMI",
                },
                {
                    location: {
                        lat: 17.4227794,
                        lng: 78.34718749999999,
                    },
                    name: "Sohini Tech Park",
                    placeId: "ChIJQ33dPXmTyzsRjfAB2hOX46g",
                },
                {
                    location: {
                        lat: 17.4225956,
                        lng: 78.3446093,
                    },
                    name: "Vamsiram Jyothi Tech Park",
                    placeId: "ChIJncUaqi-TyzsRhZQ9dvwsnm4",
                },
            ],
            school: [
                {
                    location: {
                        lat: 17.4046598,
                        lng: 78.3495526,
                    },
                    name: "The Future Kid's School",
                    placeId: "ChIJk-1ghWWUyzsRjK6HeX_yg-M",
                },
                {
                    location: {
                        lat: 17.3947321,
                        lng: 78.3388564,
                    },
                    name: "Phoenix Greens School of Learning, Kokapet, Hyderabad – CBSE / Cambridge School",
                    placeId: "ChIJx-ToW_CTyzsRC9QoJH6WPEU",
                },
                {
                    location: {
                        lat: 17.3867055,
                        lng: 78.3347442,
                    },
                    name: "Rockwell International School",
                    placeId: "ChIJszHQW0SRyzsRJHHpK0idW9U",
                },
                {
                    location: {
                        lat: 17.4198761,
                        lng: 78.3643879,
                    },
                    name: "Oakridge International School, Gachibowli",
                    placeId: "ChIJOURmiQqUyzsRsKtqHcYUFEw",
                },
                {
                    location: {
                        lat: 17.3917928,
                        lng: 78.3417728,
                    },
                    name: "The Global Edge School - Kokapet",
                    placeId: "ChIJj4Uux16UyzsRZtN9ZZpSu8Q",
                },
                {
                    location: {
                        lat: 17.4196318,
                        lng: 78.35327579999999,
                    },
                    name: "The Gaudium School",
                    placeId: "ChIJVfGP_ZqUyzsRPKsHO7tRzVI",
                },
                {
                    location: {
                        lat: 17.4242068,
                        lng: 78.3335412,
                    },
                    name: "KLAY Phoenix Primea (Nanakramguda)- Preschools and Daycare",
                    placeId: "ChIJOTeOSYGTyzsR5dhmL1zwrt0",
                },
                {
                    location: {
                        lat: 17.3858618,
                        lng: 78.3359804,
                    },
                    name: "LITTLE EDISONS PRE SCHOOL",
                    placeId: "ChIJs5bt2EaUyzsRarmAx3bk0vM",
                },
                {
                    location: {
                        lat: 17.3946539,
                        lng: 78.36124769999999,
                    },
                    name: "Telangana Social Welfare Residential School",
                    placeId: "ChIJaVVVREaUyzsRO23CqBTlfUo",
                },
                {
                    location: {
                        lat: 17.39098719999999,
                        lng: 78.35906469999999,
                    },
                    name: "Lead Grammar High School",
                    placeId: "ChIJMRiC0MaWyzsRSFDwlNgZazw",
                },
                {
                    location: {
                        lat: 17.3962103,
                        lng: 78.3654322,
                    },
                    name: "SmartKidz Play School",
                    placeId: "ChIJgyixQT6UyzsRv77ukLcx3_4",
                },
                {
                    location: {
                        lat: 17.3863808,
                        lng: 78.35850529999999,
                    },
                    name: "Krishnaveni Talent High School",
                    placeId: "ChIJv3-iMkaUyzsReqXzgm5yKCg",
                },
                {
                    location: {
                        lat: 17.40502339999999,
                        lng: 78.3481709,
                    },
                    name: "Orelle The School",
                    placeId: "ChIJcatEzamVyzsRYAdYLLBi6GU",
                },
                {
                    location: {
                        lat: 17.4112551,
                        lng: 78.3486635,
                    },
                    name: "Keystone International School",
                    placeId: "ChIJ0fXscHqUyzsRZtuS-Sl-fdg",
                },
                {
                    location: {
                        lat: 17.4112618,
                        lng: 78.3486593,
                    },
                    name: "Keystone Basketball Academy",
                    placeId: "ChIJJ0Hahm6VyzsRwcTTOwz627Y",
                },
            ],
            transit: [
                {
                    location: {
                        lat: 17.4367684,
                        lng: 78.40071019999999,
                    },
                    name: "Madhapur Metro Station",
                    placeId: "ChIJb4TCzUWRyzsRikD2sGrFnLg",
                },
                {
                    location: {
                        lat: 17.4416072,
                        lng: 78.3771677,
                    },
                    name: "Raidurgam Metro",
                    placeId: "ChIJedZKYueTyzsRvVaX8s57g-8",
                },
                {
                    location: {
                        lat: 17.4079751,
                        lng: 78.32952720000002,
                    },
                    name: "Nehru ORR Exit - 1 (Financial district)",
                    placeId: "ChIJGwN-WQCVyzsRU6bb00Q2pCo",
                },
                {
                    location: {
                        lat: 17.3817754,
                        lng: 78.3499484,
                    },
                    name: "ORR Narsingi Exit Toll Gate - 18A",
                    placeId: "ChIJGb-Scq2VyzsR5b9TAv8zt7I",
                },
                {
                    location: {
                        lat: 17.4074764,
                        lng: 78.35397449999999,
                    },
                    name: "Nehru ORR EXIT - 19 Towards Nanakramguda",
                    placeId: "ChIJxz6oZQCVyzsRDh4yP8mPbaI",
                },
            ],
        },
        possession: "2029-06-29 18:30:00.000Z",
        area_in_acres: 4.9,
        total_units: 898,
    },
    {
        coordinates: [
            {
                lat: 17.408956180591165,
                lng: 78.34842238451944,
            },
            {
                lat: 17.408667034274973,
                lng: 78.34895106932358,
            },
            {
                lat: 17.408014915371673,
                lng: 78.34796462084755,
            },
            {
                lat: 17.407033656598845,
                lng: 78.34871251642414,
            },
            {
                lat: 17.40662584676976,
                lng: 78.34705393702596,
            },
            {
                lat: 17.407594706525988,
                lng: 78.34647071468466,
            },
            {
                lat: 17.408956180591165,
                lng: 78.34842238451944,
            },
        ],
        created: "2026-06-06 06:35:13.683Z",
        id: "8jh0pppmctz8hfl",
        name: "Spectra",
        updated: "2026-06-08 03:54:54.663Z",
        towers_config: [
            {
                floor_count: 39,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.407865138692728,
                        lng: 78.34765714957888,
                    },
                    {
                        lat: 17.40794126998314,
                        lng: 78.34787318089934,
                    },
                    {
                        lat: 17.407069634085516,
                        lng: 78.34820604056642,
                    },
                    {
                        lat: 17.406993502795103,
                        lng: 78.34799000924596,
                    },
                ],
                label: "Tower A",
            },
            {
                floor_count: 39,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.40787936236563,
                        lng: 78.34723433087302,
                    },
                    {
                        lat: 17.407947113386047,
                        lng: 78.347417124328,
                    },
                    {
                        lat: 17.407532068511333,
                        lng: 78.34758382148175,
                    },
                    {
                        lat: 17.407464317490916,
                        lng: 78.34740102802677,
                    },
                ],
                label: "Tower B",
            },
            {
                floor_count: 39,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.407357181160748,
                        lng: 78.34744296996439,
                    },
                    {
                        lat: 17.40742723818474,
                        lng: 78.34763324391984,
                    },
                    {
                        lat: 17.40701285596537,
                        lng: 78.3477985739591,
                    },
                    {
                        lat: 17.406942798941376,
                        lng: 78.34760830000364,
                    },
                ],
                label: "Tower C",
            },
            {
                floor_count: 39,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.407663005110965,
                        lng: 78.34684233810908,
                    },
                    {
                        lat: 17.407739203372095,
                        lng: 78.34705495807333,
                    },
                    {
                        lat: 17.406900875949336,
                        lng: 78.34738051984736,
                    },
                    {
                        lat: 17.406824677688206,
                        lng: 78.34716789988312,
                    },
                ],
                label: "Tower D",
            },
        ],
        POI: {
            dining: [
                {
                    location: {
                        lat: 17.4185652,
                        lng: 78.3421268,
                    },
                    name: "The Pool Bar",
                    placeId: "ChIJ_QmYcX-UyzsRtL8E1gu_9Gk",
                },
                {
                    location: {
                        lat: 17.4203021,
                        lng: 78.347528,
                    },
                    name: "Being Hungry",
                    placeId: "ChIJhaOIhIeTyzsR7whYNp8w2BA",
                },
                {
                    location: {
                        lat: 17.4219008,
                        lng: 78.3388496,
                    },
                    name: "Pizza Hut | Kapil Tower, Hyderabad",
                    placeId: "ChIJA-t5h3-TyzsRgKIeUGwKrZM",
                },
                {
                    location: {
                        lat: 17.4216493,
                        lng: 78.3371344,
                    },
                    name: "Zega",
                    placeId: "ChIJX87KoH-TyzsRQsuBjE1I06c",
                },
                {
                    location: {
                        lat: 17.4242119,
                        lng: 78.34432550000001,
                    },
                    name: "Domino's Pizza | GHMC, Hyderabad",
                    placeId: "ChIJv-IDSoGTyzsRl6jZ4L7eGnI",
                },
                {
                    location: {
                        lat: 17.422972,
                        lng: 78.33071,
                    },
                    name: "Citrus Cafe by Lemon Tree",
                    placeId: "ChIJwwRC232TyzsRe7epKuAHGsY",
                },
                {
                    location: {
                        lat: 17.3865749,
                        lng: 78.338489,
                    },
                    name: "Cafe Sandwicho",
                    placeId: "ChIJtdbAwveUyzsRKkuClt4ng2Q",
                },
                {
                    location: {
                        lat: 17.4119941,
                        lng: 78.3422863,
                    },
                    name: "Katha Coffee & Bakehouse | Financial District",
                    placeId: "ChIJVfGKXwCVyzsRAw8S31Hz3uU",
                },
                {
                    location: {
                        lat: 17.4120161,
                        lng: 78.3422369,
                    },
                    name: "Leon's Burgers & Wings Financial District",
                    placeId: "ChIJg5eNH0SVyzsROAWPCitFGUU",
                },
                {
                    location: {
                        lat: 17.4121811,
                        lng: 78.3418891,
                    },
                    name: "Tiger Lily Coffee & Bistro",
                    placeId: "ChIJn9c627OVyzsRANynIW0drTE",
                },
                {
                    location: {
                        lat: 17.4011415,
                        lng: 78.33853789999999,
                    },
                    name: "Cu2 Brewhouse",
                    placeId: "ChIJl7C_sUWVyzsRswR8HC7qYLc",
                },
            ],
            hospital: [
                {
                    location: {
                        lat: 17.416696,
                        lng: 78.3550825,
                    },
                    name: "DR. AMITH REDDY Best KNEE HIP ANKLE FOOT doctor. Robotic Joint Replacement, Sports Injuries, Joint Preservation, Fractures",
                    placeId: "ChIJEQSExH-UyzsRoNSqGYM3dTQ",
                },
                {
                    location: {
                        lat: 17.3864769,
                        lng: 78.3557253,
                    },
                    name: "Nursing Home",
                    placeId: "ChIJs7ER4kWUyzsRNjiUg5HAKso",
                },
                {
                    location: {
                        lat: 17.4175264,
                        lng: 78.3394579,
                    },
                    name: "Continental Hospitals",
                    placeId: "ChIJofXk3n-UyzsRn6fj0rQJygI",
                },
                {
                    location: {
                        lat: 17.4253694,
                        lng: 78.36153379999999,
                    },
                    name: "Ibne Sina Health Centre MANUU",
                    placeId: "ChIJA_mttPSTyzsR607JryN3088",
                },
                {
                    location: {
                        lat: 17.4125282,
                        lng: 78.3364046,
                    },
                    name: "Dr Nityanand Rao Patil | Best Intensivist, Critical Care, Cardiology | Medicover Hospitals, Financial district,Hyderabad",
                    placeId: "ChIJ-UO1YJGTyzsRDcjALzCwyzU",
                },
                {
                    location: {
                        lat: 17.4128318,
                        lng: 78.33576029999999,
                    },
                    name: "Medicover Hospitals Financial District, Hyderabad",
                    placeId: "ChIJNfytawCVyzsRIiiBOlwsJjE",
                },
                {
                    location: {
                        lat: 17.4128545,
                        lng: 78.3357657,
                    },
                    name: "Dr Ramya Nadipineni - Neonatologist & Pediatrician in Financial District",
                    placeId: "ChIJb4g70n6VyzsR4TET_J3Rx0c",
                },
                {
                    location: {
                        lat: 17.4128827,
                        lng: 78.33511659999999,
                    },
                    name: "Megha's Nutrition & Dietitian Clinic",
                    placeId: "ChIJIYMYeBCVyzsRmum3mjdAWmo",
                },
                {
                    location: {
                        lat: 17.4154856,
                        lng: 78.34051459999999,
                    },
                    name: "Medicover clinic",
                    placeId: "ChIJySw_DQCVyzsR8LzLJqrLrDg",
                },
                {
                    location: {
                        lat: 17.4129167,
                        lng: 78.3351252,
                    },
                    name: "Atlas Women's clinic",
                    placeId: "ChIJ-xhOGeqVyzsRXZFnHUBVyUU",
                },
                {
                    location: {
                        lat: 17.4129415,
                        lng: 78.3351066,
                    },
                    name: "Sakar Counselling Centre - Less Sessions Fast Results",
                    placeId: "ChIJ_TzUoFORyzsReIaxpEfwdqQ",
                },
                {
                    location: {
                        lat: 17.4015212,
                        lng: 78.3500864,
                    },
                    name: "Sankara Eye Hospital Nanakramguda",
                    placeId: "ChIJd9qRmx6VyzsR8yHZHKPmuQM",
                },
                {
                    location: {
                        lat: 17.40963,
                        lng: 78.35155999999999,
                    },
                    name: "Dr. Sudip Kumar Pore | Consult With Best General practitioner Doctor Near Me | Uti | 12+ Yrs. of Exp.",
                    placeId: "ChIJuWr12zOVyzsRpes-SrC7ZOQ",
                },
            ],
            mall: [
                {
                    location: {
                        lat: 17.4118982,
                        lng: 78.3421444,
                    },
                    name: "Myscape Stories",
                    placeId: "ChIJrQ37xSqVyzsRc6mqRcRjdTM",
                },
                {
                    location: {
                        lat: 17.4003612,
                        lng: 78.3398879,
                    },
                    name: "Fairmount Golden Mile",
                    placeId: "ChIJ-7thfriVyzsRAHgP4YiWDqw",
                },
                {
                    location: {
                        lat: 17.40007019999999,
                        lng: 78.3401031,
                    },
                    name: "Aria by Fairmount",
                    placeId: "ChIJP7O9PQCVyzsRwIP2v9qybic",
                },
                {
                    location: {
                        lat: 17.3986811,
                        lng: 78.3330436,
                    },
                    name: "Aqua gold plus",
                    placeId: "ChIJMx4r9k6VyzsRvYp2gZ12f3Y",
                },
                {
                    location: {
                        lat: 17.3967663,
                        lng: 78.33477239999999,
                    },
                    name: "NeedFlux",
                    placeId: "ChIJc8rG1jOVyzsRxgAw7wmTjwM",
                },
                {
                    location: {
                        lat: 17.3933135,
                        lng: 78.34062449999999,
                    },
                    name: "MN Corner",
                    placeId: "ChIJuXA6HhqVyzsR7Tnv-0ExY4A",
                },
                {
                    location: {
                        lat: 17.4156521,
                        lng: 78.35492769999999,
                    },
                    name: "RNV Commercial complex",
                    placeId: "ChIJ10qVSHaVyzsRSkInzhbSMGQ",
                },
                {
                    location: {
                        lat: 17.3958168,
                        lng: 78.35292040000002,
                    },
                    name: "Vamsiram Builder Mall and Multiplex",
                    placeId: "ChIJPzdbKg2VyzsRTN6u5pFLtz0",
                },
                {
                    location: {
                        lat: 17.3911897,
                        lng: 78.3437716,
                    },
                    name: "MN Capital",
                    placeId: "ChIJS8xDrl6UyzsR5-anIrlwlGg",
                },
                {
                    location: {
                        lat: 17.3907914,
                        lng: 78.34402589999999,
                    },
                    name: "MN Crux",
                    placeId: "ChIJ-ZUcBgCVyzsROoHZEJpk8x4",
                },
                {
                    location: {
                        lat: 17.3905251,
                        lng: 78.3419492,
                    },
                    name: "SSReftech",
                    placeId: "ChIJo56uAQaVyzsRGPBm6jKVEi8",
                },
                {
                    location: {
                        lat: 17.3903527,
                        lng: 78.3415672,
                    },
                    name: "Sunshine KAY Golden Square",
                    placeId: "ChIJR0_wLQmVyzsRSPbk0f-9KEY",
                },
                {
                    location: {
                        lat: 17.390198,
                        lng: 78.34167839999999,
                    },
                    name: "Essen Presidential",
                    placeId: "ChIJBRM8AniVyzsRiEWatRo9tkE",
                },
                {
                    location: {
                        lat: 17.4238936,
                        lng: 78.3441814,
                    },
                    name: "Anvi's Eco Grand mall",
                    placeId: "ChIJp9vB5ROTyzsRUbnnb9YgQiU",
                },
            ],
            office: [
                {
                    location: {
                        lat: 17.4187031,
                        lng: 78.3375039,
                    },
                    name: "Cyient",
                    placeId: "ChIJFcBWGICUyzsRXIfItvuVWCg",
                },
                {
                    location: {
                        lat: 17.4357059,
                        lng: 78.38314489999999,
                    },
                    name: "International Tech Park Hyderabad.",
                    placeId: "ChIJ6U8bC1iRyzsRq0tMYJgzRYY",
                },
                {
                    location: {
                        lat: 17.4409893,
                        lng: 78.3778951,
                    },
                    name: "Raheja Mindspace IT Park",
                    placeId: "ChIJUZZhw-CTyzsRD1pFBhTNZZk",
                },
                {
                    location: {
                        lat: 17.4137054,
                        lng: 78.3385443,
                    },
                    name: "Prestige SkyTech",
                    placeId: "ChIJxyWCsGWVyzsRR3qVtE-z1qc",
                },
                {
                    location: {
                        lat: 17.4069571,
                        lng: 78.3248473,
                    },
                    name: "IT park PJT",
                    placeId: "ChIJ7YeBrBmVyzsR_QK7Q9YdVOM",
                },
                {
                    location: {
                        lat: 17.4038757,
                        lng: 78.33106029999999,
                    },
                    name: "GAR Infobahn - Inspired by Laxmi",
                    placeId: "ChIJMXWS-46UyzsRFD8a275GD3c",
                },
                {
                    location: {
                        lat: 17.4077255,
                        lng: 78.3254039,
                    },
                    name: "Poojitha Tech Park",
                    placeId: "ChIJKVXvIAKVyzsRE6UTC1ebcMI",
                },
                {
                    location: {
                        lat: 17.4227794,
                        lng: 78.34718749999999,
                    },
                    name: "Sohini Tech Park",
                    placeId: "ChIJQ33dPXmTyzsRjfAB2hOX46g",
                },
                {
                    location: {
                        lat: 17.4225956,
                        lng: 78.3446093,
                    },
                    name: "Vamsiram Jyothi Tech Park",
                    placeId: "ChIJncUaqi-TyzsRhZQ9dvwsnm4",
                },
            ],
            school: [
                {
                    location: {
                        lat: 17.4046598,
                        lng: 78.3495526,
                    },
                    name: "The Future Kid's School",
                    placeId: "ChIJk-1ghWWUyzsRjK6HeX_yg-M",
                },
                {
                    location: {
                        lat: 17.3947321,
                        lng: 78.3388564,
                    },
                    name: "Phoenix Greens School of Learning, Kokapet, Hyderabad – CBSE / Cambridge School",
                    placeId: "ChIJx-ToW_CTyzsRC9QoJH6WPEU",
                },
                {
                    location: {
                        lat: 17.3867055,
                        lng: 78.3347442,
                    },
                    name: "Rockwell International School",
                    placeId: "ChIJszHQW0SRyzsRJHHpK0idW9U",
                },
                {
                    location: {
                        lat: 17.4198761,
                        lng: 78.3643879,
                    },
                    name: "Oakridge International School, Gachibowli",
                    placeId: "ChIJOURmiQqUyzsRsKtqHcYUFEw",
                },
                {
                    location: {
                        lat: 17.3917928,
                        lng: 78.3417728,
                    },
                    name: "The Global Edge School - Kokapet",
                    placeId: "ChIJj4Uux16UyzsRZtN9ZZpSu8Q",
                },
                {
                    location: {
                        lat: 17.4196318,
                        lng: 78.35327579999999,
                    },
                    name: "The Gaudium School",
                    placeId: "ChIJVfGP_ZqUyzsRPKsHO7tRzVI",
                },
                {
                    location: {
                        lat: 17.4242068,
                        lng: 78.3335412,
                    },
                    name: "KLAY Phoenix Primea (Nanakramguda)- Preschools and Daycare",
                    placeId: "ChIJOTeOSYGTyzsR5dhmL1zwrt0",
                },
                {
                    location: {
                        lat: 17.3858618,
                        lng: 78.3359804,
                    },
                    name: "LITTLE EDISONS PRE SCHOOL",
                    placeId: "ChIJs5bt2EaUyzsRarmAx3bk0vM",
                },
                {
                    location: {
                        lat: 17.3946539,
                        lng: 78.36124769999999,
                    },
                    name: "Telangana Social Welfare Residential School",
                    placeId: "ChIJaVVVREaUyzsRO23CqBTlfUo",
                },
                {
                    location: {
                        lat: 17.39098719999999,
                        lng: 78.35906469999999,
                    },
                    name: "Lead Grammar High School",
                    placeId: "ChIJMRiC0MaWyzsRSFDwlNgZazw",
                },
                {
                    location: {
                        lat: 17.3962103,
                        lng: 78.3654322,
                    },
                    name: "SmartKidz Play School",
                    placeId: "ChIJgyixQT6UyzsRv77ukLcx3_4",
                },
                {
                    location: {
                        lat: 17.3863808,
                        lng: 78.35850529999999,
                    },
                    name: "Krishnaveni Talent High School",
                    placeId: "ChIJv3-iMkaUyzsReqXzgm5yKCg",
                },
                {
                    location: {
                        lat: 17.40502339999999,
                        lng: 78.3481709,
                    },
                    name: "Orelle The School",
                    placeId: "ChIJcatEzamVyzsRYAdYLLBi6GU",
                },
                {
                    location: {
                        lat: 17.4112551,
                        lng: 78.3486635,
                    },
                    name: "Keystone International School",
                    placeId: "ChIJ0fXscHqUyzsRZtuS-Sl-fdg",
                },
                {
                    location: {
                        lat: 17.4112618,
                        lng: 78.3486593,
                    },
                    name: "Keystone Basketball Academy",
                    placeId: "ChIJJ0Hahm6VyzsRwcTTOwz627Y",
                },
            ],
            transit: [
                {
                    location: {
                        lat: 17.4367684,
                        lng: 78.40071019999999,
                    },
                    name: "Madhapur Metro Station",
                    placeId: "ChIJb4TCzUWRyzsRikD2sGrFnLg",
                },
                {
                    location: {
                        lat: 17.4416072,
                        lng: 78.3771677,
                    },
                    name: "Raidurgam Metro",
                    placeId: "ChIJedZKYueTyzsRvVaX8s57g-8",
                },
                {
                    location: {
                        lat: 17.4079751,
                        lng: 78.32952720000002,
                    },
                    name: "Nehru ORR Exit - 1 (Financial district)",
                    placeId: "ChIJGwN-WQCVyzsRU6bb00Q2pCo",
                },
                {
                    location: {
                        lat: 17.3817754,
                        lng: 78.3499484,
                    },
                    name: "ORR Narsingi Exit Toll Gate - 18A",
                    placeId: "ChIJGb-Scq2VyzsR5b9TAv8zt7I",
                },
                {
                    location: {
                        lat: 17.4074764,
                        lng: 78.35397449999999,
                    },
                    name: "Nehru ORR EXIT - 19 Towards Nanakramguda",
                    placeId: "ChIJxz6oZQCVyzsRDh4yP8mPbaI",
                },
            ],
        },
        possession: "2027-05-30 18:30:00.000Z",
        area_in_acres: 7.9,
        total_units: 1182,
    },
    {
        coordinates: [
            {
                lat: 17.405488088540885,
                lng: 78.34239184203982,
            },
            {
                lat: 17.40802760596762,
                lng: 78.34158898269442,
            },
            {
                lat: 17.408394818186263,
                lng: 78.342188939065,
            },
            {
                lat: 17.405832553330978,
                lng: 78.34307998963405,
            },
            {
                lat: 17.405488088540885,
                lng: 78.34239184203982,
            },
        ],
        created: "2026-06-06 06:38:50.040Z",
        id: "klcfmw0yxekwsgo",
        name: "Broadway",
        updated: "2026-06-08 08:54:37.226Z",
        towers_config: [
            {
                apartment_grid: {
                    cells: [
                        ["3", "3"],
                        ["3", "3"],
                        ["3", "3"],
                    ],
                    columns: 2,
                    rows: 3,
                },
                floor_count: 50,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.4077697898964,
                        lng: 78.34188808625429,
                    },
                    {
                        lat: 17.407850428780417,
                        lng: 78.3421838838528,
                    },
                    {
                        lat: 17.407350549600693,
                        lng: 78.34233155473827,
                    },
                    {
                        lat: 17.407269910716675,
                        lng: 78.34203575713975,
                    },
                ],
                label: "Tower A",
            },
            {
                apartment_grid: {
                    cells: [
                        ["3", "3"],
                        ["3", "3"],
                        ["3", "3"],
                    ],
                    columns: 2,
                    rows: 3,
                },
                floor_count: 50,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.407126355936025,
                        lng: 78.34207574772195,
                    },
                    {
                        lat: 17.407202540571387,
                        lng: 78.34236548046839,
                    },
                    {
                        lat: 17.406674015394675,
                        lng: 78.34251607610541,
                    },
                    {
                        lat: 17.406597830759313,
                        lng: 78.34222634335897,
                    },
                ],
                label: "Tower B",
            },
            {
                apartment_grid: {
                    cells: [
                        ["3", "3"],
                        ["3", "3"],
                        ["3", "3"],
                    ],
                    columns: 2,
                    rows: 3,
                },
                floor_count: 50,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.40646836569283,
                        lng: 78.34227355120986,
                    },
                    {
                        lat: 17.4065490262064,
                        lng: 78.34255473417923,
                    },
                    {
                        lat: 17.406041323816723,
                        lng: 78.34271255163809,
                    },
                    {
                        lat: 17.405960663303155,
                        lng: 78.34243136866871,
                    },
                ],
                label: "Tower C",
            },
        ],
        POI: {
            dining: [
                {
                    location: {
                        lat: 17.4185652,
                        lng: 78.3421268,
                    },
                    name: "The Pool Bar",
                    placeId: "ChIJ_QmYcX-UyzsRtL8E1gu_9Gk",
                },
                {
                    location: {
                        lat: 17.4203021,
                        lng: 78.347528,
                    },
                    name: "Being Hungry",
                    placeId: "ChIJhaOIhIeTyzsR7whYNp8w2BA",
                },
                {
                    location: {
                        lat: 17.4219008,
                        lng: 78.3388496,
                    },
                    name: "Pizza Hut | Kapil Tower, Hyderabad",
                    placeId: "ChIJA-t5h3-TyzsRgKIeUGwKrZM",
                },
                {
                    location: {
                        lat: 17.4216493,
                        lng: 78.3371344,
                    },
                    name: "Zega",
                    placeId: "ChIJX87KoH-TyzsRQsuBjE1I06c",
                },
                {
                    location: {
                        lat: 17.4242119,
                        lng: 78.34432550000001,
                    },
                    name: "Domino's Pizza | GHMC, Hyderabad",
                    placeId: "ChIJv-IDSoGTyzsRl6jZ4L7eGnI",
                },
                {
                    location: {
                        lat: 17.422972,
                        lng: 78.33071,
                    },
                    name: "Citrus Cafe by Lemon Tree",
                    placeId: "ChIJwwRC232TyzsRe7epKuAHGsY",
                },
                {
                    location: {
                        lat: 17.3865749,
                        lng: 78.338489,
                    },
                    name: "Cafe Sandwicho",
                    placeId: "ChIJtdbAwveUyzsRKkuClt4ng2Q",
                },
                {
                    location: {
                        lat: 17.4119941,
                        lng: 78.3422863,
                    },
                    name: "Katha Coffee & Bakehouse | Financial District",
                    placeId: "ChIJVfGKXwCVyzsRAw8S31Hz3uU",
                },
                {
                    location: {
                        lat: 17.4120161,
                        lng: 78.3422369,
                    },
                    name: "Leon's Burgers & Wings Financial District",
                    placeId: "ChIJg5eNH0SVyzsROAWPCitFGUU",
                },
                {
                    location: {
                        lat: 17.4121811,
                        lng: 78.3418891,
                    },
                    name: "Tiger Lily Coffee & Bistro",
                    placeId: "ChIJn9c627OVyzsRANynIW0drTE",
                },
                {
                    location: {
                        lat: 17.4011415,
                        lng: 78.33853789999999,
                    },
                    name: "Cu2 Brewhouse",
                    placeId: "ChIJl7C_sUWVyzsRswR8HC7qYLc",
                },
            ],
            hospital: [
                {
                    location: {
                        lat: 17.416696,
                        lng: 78.3550825,
                    },
                    name: "DR. AMITH REDDY Best KNEE HIP ANKLE FOOT doctor. Robotic Joint Replacement, Sports Injuries, Joint Preservation, Fractures",
                    placeId: "ChIJEQSExH-UyzsRoNSqGYM3dTQ",
                },
                {
                    location: {
                        lat: 17.3864769,
                        lng: 78.3557253,
                    },
                    name: "Nursing Home",
                    placeId: "ChIJs7ER4kWUyzsRNjiUg5HAKso",
                },
                {
                    location: {
                        lat: 17.4175264,
                        lng: 78.3394579,
                    },
                    name: "Continental Hospitals",
                    placeId: "ChIJofXk3n-UyzsRn6fj0rQJygI",
                },
                {
                    location: {
                        lat: 17.4253694,
                        lng: 78.36153379999999,
                    },
                    name: "Ibne Sina Health Centre MANUU",
                    placeId: "ChIJA_mttPSTyzsR607JryN3088",
                },
                {
                    location: {
                        lat: 17.4125282,
                        lng: 78.3364046,
                    },
                    name: "Dr Nityanand Rao Patil | Best Intensivist, Critical Care, Cardiology | Medicover Hospitals, Financial district,Hyderabad",
                    placeId: "ChIJ-UO1YJGTyzsRDcjALzCwyzU",
                },
                {
                    location: {
                        lat: 17.4128318,
                        lng: 78.33576029999999,
                    },
                    name: "Medicover Hospitals Financial District, Hyderabad",
                    placeId: "ChIJNfytawCVyzsRIiiBOlwsJjE",
                },
                {
                    location: {
                        lat: 17.4128545,
                        lng: 78.3357657,
                    },
                    name: "Dr Ramya Nadipineni - Neonatologist & Pediatrician in Financial District",
                    placeId: "ChIJb4g70n6VyzsR4TET_J3Rx0c",
                },
                {
                    location: {
                        lat: 17.4128827,
                        lng: 78.33511659999999,
                    },
                    name: "Megha's Nutrition & Dietitian Clinic",
                    placeId: "ChIJIYMYeBCVyzsRmum3mjdAWmo",
                },
                {
                    location: {
                        lat: 17.4154856,
                        lng: 78.34051459999999,
                    },
                    name: "Medicover clinic",
                    placeId: "ChIJySw_DQCVyzsR8LzLJqrLrDg",
                },
                {
                    location: {
                        lat: 17.4129167,
                        lng: 78.3351252,
                    },
                    name: "Atlas Women's clinic",
                    placeId: "ChIJ-xhOGeqVyzsRXZFnHUBVyUU",
                },
                {
                    location: {
                        lat: 17.4129415,
                        lng: 78.3351066,
                    },
                    name: "Sakar Counselling Centre - Less Sessions Fast Results",
                    placeId: "ChIJ_TzUoFORyzsReIaxpEfwdqQ",
                },
                {
                    location: {
                        lat: 17.4015212,
                        lng: 78.3500864,
                    },
                    name: "Sankara Eye Hospital Nanakramguda",
                    placeId: "ChIJd9qRmx6VyzsR8yHZHKPmuQM",
                },
                {
                    location: {
                        lat: 17.40963,
                        lng: 78.35155999999999,
                    },
                    name: "Dr. Sudip Kumar Pore | Consult With Best General practitioner Doctor Near Me | Uti | 12+ Yrs. of Exp.",
                    placeId: "ChIJuWr12zOVyzsRpes-SrC7ZOQ",
                },
            ],
            mall: [
                {
                    location: {
                        lat: 17.4118982,
                        lng: 78.3421444,
                    },
                    name: "Myscape Stories",
                    placeId: "ChIJrQ37xSqVyzsRc6mqRcRjdTM",
                },
                {
                    location: {
                        lat: 17.4003612,
                        lng: 78.3398879,
                    },
                    name: "Fairmount Golden Mile",
                    placeId: "ChIJ-7thfriVyzsRAHgP4YiWDqw",
                },
                {
                    location: {
                        lat: 17.40007019999999,
                        lng: 78.3401031,
                    },
                    name: "Aria by Fairmount",
                    placeId: "ChIJP7O9PQCVyzsRwIP2v9qybic",
                },
                {
                    location: {
                        lat: 17.3986811,
                        lng: 78.3330436,
                    },
                    name: "Aqua gold plus",
                    placeId: "ChIJMx4r9k6VyzsRvYp2gZ12f3Y",
                },
                {
                    location: {
                        lat: 17.3967663,
                        lng: 78.33477239999999,
                    },
                    name: "NeedFlux",
                    placeId: "ChIJc8rG1jOVyzsRxgAw7wmTjwM",
                },
                {
                    location: {
                        lat: 17.3933135,
                        lng: 78.34062449999999,
                    },
                    name: "MN Corner",
                    placeId: "ChIJuXA6HhqVyzsR7Tnv-0ExY4A",
                },
                {
                    location: {
                        lat: 17.4156521,
                        lng: 78.35492769999999,
                    },
                    name: "RNV Commercial complex",
                    placeId: "ChIJ10qVSHaVyzsRSkInzhbSMGQ",
                },
                {
                    location: {
                        lat: 17.3958168,
                        lng: 78.35292040000002,
                    },
                    name: "Vamsiram Builder Mall and Multiplex",
                    placeId: "ChIJPzdbKg2VyzsRTN6u5pFLtz0",
                },
                {
                    location: {
                        lat: 17.3911897,
                        lng: 78.3437716,
                    },
                    name: "MN Capital",
                    placeId: "ChIJS8xDrl6UyzsR5-anIrlwlGg",
                },
                {
                    location: {
                        lat: 17.3907914,
                        lng: 78.34402589999999,
                    },
                    name: "MN Crux",
                    placeId: "ChIJ-ZUcBgCVyzsROoHZEJpk8x4",
                },
                {
                    location: {
                        lat: 17.3905251,
                        lng: 78.3419492,
                    },
                    name: "SSReftech",
                    placeId: "ChIJo56uAQaVyzsRGPBm6jKVEi8",
                },
                {
                    location: {
                        lat: 17.3903527,
                        lng: 78.3415672,
                    },
                    name: "Sunshine KAY Golden Square",
                    placeId: "ChIJR0_wLQmVyzsRSPbk0f-9KEY",
                },
                {
                    location: {
                        lat: 17.390198,
                        lng: 78.34167839999999,
                    },
                    name: "Essen Presidential",
                    placeId: "ChIJBRM8AniVyzsRiEWatRo9tkE",
                },
                {
                    location: {
                        lat: 17.4238936,
                        lng: 78.3441814,
                    },
                    name: "Anvi's Eco Grand mall",
                    placeId: "ChIJp9vB5ROTyzsRUbnnb9YgQiU",
                },
            ],
            office: [
                {
                    location: {
                        lat: 17.4187031,
                        lng: 78.3375039,
                    },
                    name: "Cyient",
                    placeId: "ChIJFcBWGICUyzsRXIfItvuVWCg",
                },
                {
                    location: {
                        lat: 17.4357059,
                        lng: 78.38314489999999,
                    },
                    name: "International Tech Park Hyderabad.",
                    placeId: "ChIJ6U8bC1iRyzsRq0tMYJgzRYY",
                },
                {
                    location: {
                        lat: 17.4409893,
                        lng: 78.3778951,
                    },
                    name: "Raheja Mindspace IT Park",
                    placeId: "ChIJUZZhw-CTyzsRD1pFBhTNZZk",
                },
                {
                    location: {
                        lat: 17.4137054,
                        lng: 78.3385443,
                    },
                    name: "Prestige SkyTech",
                    placeId: "ChIJxyWCsGWVyzsRR3qVtE-z1qc",
                },
                {
                    location: {
                        lat: 17.4069571,
                        lng: 78.3248473,
                    },
                    name: "IT park PJT",
                    placeId: "ChIJ7YeBrBmVyzsR_QK7Q9YdVOM",
                },
                {
                    location: {
                        lat: 17.4038757,
                        lng: 78.33106029999999,
                    },
                    name: "GAR Infobahn - Inspired by Laxmi",
                    placeId: "ChIJMXWS-46UyzsRFD8a275GD3c",
                },
                {
                    location: {
                        lat: 17.4077255,
                        lng: 78.3254039,
                    },
                    name: "Poojitha Tech Park",
                    placeId: "ChIJKVXvIAKVyzsRE6UTC1ebcMI",
                },
                {
                    location: {
                        lat: 17.4227794,
                        lng: 78.34718749999999,
                    },
                    name: "Sohini Tech Park",
                    placeId: "ChIJQ33dPXmTyzsRjfAB2hOX46g",
                },
                {
                    location: {
                        lat: 17.4225956,
                        lng: 78.3446093,
                    },
                    name: "Vamsiram Jyothi Tech Park",
                    placeId: "ChIJncUaqi-TyzsRhZQ9dvwsnm4",
                },
            ],
            school: [
                {
                    location: {
                        lat: 17.4046598,
                        lng: 78.3495526,
                    },
                    name: "The Future Kid's School",
                    placeId: "ChIJk-1ghWWUyzsRjK6HeX_yg-M",
                },
                {
                    location: {
                        lat: 17.3947321,
                        lng: 78.3388564,
                    },
                    name: "Phoenix Greens School of Learning, Kokapet, Hyderabad – CBSE / Cambridge School",
                    placeId: "ChIJx-ToW_CTyzsRC9QoJH6WPEU",
                },
                {
                    location: {
                        lat: 17.3867055,
                        lng: 78.3347442,
                    },
                    name: "Rockwell International School",
                    placeId: "ChIJszHQW0SRyzsRJHHpK0idW9U",
                },
                {
                    location: {
                        lat: 17.4198761,
                        lng: 78.3643879,
                    },
                    name: "Oakridge International School, Gachibowli",
                    placeId: "ChIJOURmiQqUyzsRsKtqHcYUFEw",
                },
                {
                    location: {
                        lat: 17.3917928,
                        lng: 78.3417728,
                    },
                    name: "The Global Edge School - Kokapet",
                    placeId: "ChIJj4Uux16UyzsRZtN9ZZpSu8Q",
                },
                {
                    location: {
                        lat: 17.4196318,
                        lng: 78.35327579999999,
                    },
                    name: "The Gaudium School",
                    placeId: "ChIJVfGP_ZqUyzsRPKsHO7tRzVI",
                },
                {
                    location: {
                        lat: 17.4242068,
                        lng: 78.3335412,
                    },
                    name: "KLAY Phoenix Primea (Nanakramguda)- Preschools and Daycare",
                    placeId: "ChIJOTeOSYGTyzsR5dhmL1zwrt0",
                },
                {
                    location: {
                        lat: 17.3858618,
                        lng: 78.3359804,
                    },
                    name: "LITTLE EDISONS PRE SCHOOL",
                    placeId: "ChIJs5bt2EaUyzsRarmAx3bk0vM",
                },
                {
                    location: {
                        lat: 17.3946539,
                        lng: 78.36124769999999,
                    },
                    name: "Telangana Social Welfare Residential School",
                    placeId: "ChIJaVVVREaUyzsRO23CqBTlfUo",
                },
                {
                    location: {
                        lat: 17.39098719999999,
                        lng: 78.35906469999999,
                    },
                    name: "Lead Grammar High School",
                    placeId: "ChIJMRiC0MaWyzsRSFDwlNgZazw",
                },
                {
                    location: {
                        lat: 17.3962103,
                        lng: 78.3654322,
                    },
                    name: "SmartKidz Play School",
                    placeId: "ChIJgyixQT6UyzsRv77ukLcx3_4",
                },
                {
                    location: {
                        lat: 17.3863808,
                        lng: 78.35850529999999,
                    },
                    name: "Krishnaveni Talent High School",
                    placeId: "ChIJv3-iMkaUyzsReqXzgm5yKCg",
                },
                {
                    location: {
                        lat: 17.40502339999999,
                        lng: 78.3481709,
                    },
                    name: "Orelle The School",
                    placeId: "ChIJcatEzamVyzsRYAdYLLBi6GU",
                },
                {
                    location: {
                        lat: 17.4112551,
                        lng: 78.3486635,
                    },
                    name: "Keystone International School",
                    placeId: "ChIJ0fXscHqUyzsRZtuS-Sl-fdg",
                },
                {
                    location: {
                        lat: 17.4112618,
                        lng: 78.3486593,
                    },
                    name: "Keystone Basketball Academy",
                    placeId: "ChIJJ0Hahm6VyzsRwcTTOwz627Y",
                },
            ],
            transit: [
                {
                    location: {
                        lat: 17.4367684,
                        lng: 78.40071019999999,
                    },
                    name: "Madhapur Metro Station",
                    placeId: "ChIJb4TCzUWRyzsRikD2sGrFnLg",
                },
                {
                    location: {
                        lat: 17.4416072,
                        lng: 78.3771677,
                    },
                    name: "Raidurgam Metro",
                    placeId: "ChIJedZKYueTyzsRvVaX8s57g-8",
                },
                {
                    location: {
                        lat: 17.4079751,
                        lng: 78.32952720000002,
                    },
                    name: "Nehru ORR Exit - 1 (Financial district)",
                    placeId: "ChIJGwN-WQCVyzsRU6bb00Q2pCo",
                },
                {
                    location: {
                        lat: 17.3817754,
                        lng: 78.3499484,
                    },
                    name: "ORR Narsingi Exit Toll Gate - 18A",
                    placeId: "ChIJGb-Scq2VyzsR5b9TAv8zt7I",
                },
                {
                    location: {
                        lat: 17.4074764,
                        lng: 78.35397449999999,
                    },
                    name: "Nehru ORR EXIT - 19 Towards Nanakramguda",
                    placeId: "ChIJxz6oZQCVyzsRDh4yP8mPbaI",
                },
            ],
        },
        possession: "2030-05-30 18:30:00.000Z",
        area_in_acres: 5,
        total_units: 885,
    },
    {
        coordinates: [
            {
                lat: 17.47594434453235,
                lng: 78.42377537859143,
            },
            {
                lat: 17.47657469639327,
                lng: 78.42416222113098,
            },
            {
                lat: 17.477205046070726,
                lng: 78.42442011615736,
            },
            {
                lat: 17.47705004489089,
                lng: 78.4246668112958,
            },
            {
                lat: 17.47697073475057,
                lng: 78.42464535362367,
            },
            {
                lat: 17.47688886618238,
                lng: 78.42477812296991,
            },
            {
                lat: 17.476818799763294,
                lng: 78.42490597695576,
            },
            {
                lat: 17.47665021770676,
                lng: 78.42485736950277,
            },
            {
                lat: 17.47655044020862,
                lng: 78.42514838918089,
            },
            {
                lat: 17.47701223047785,
                lng: 78.42531066282629,
            },
            {
                lat: 17.476694688880727,
                lng: 78.4254160559829,
            },
            {
                lat: 17.476021423242376,
                lng: 78.4256496051875,
            },
            {
                lat: 17.475687088893668,
                lng: 78.42587069785101,
            },
            {
                lat: 17.474919358026206,
                lng: 78.42543460445397,
            },
            {
                lat: 17.47594434453235,
                lng: 78.42377537859143,
            },
        ],
        created: "2026-06-06 07:42:07.784Z",
        id: "vddsrtz8gplmtza",
        name: "Landmark",
        updated: "2026-06-08 04:15:04.394Z",
        towers_config: [
            {
                floor_count: 20,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.475836014521285,
                        lng: 78.42523168382165,
                    },
                    {
                        lat: 17.475836014521285,
                        lng: 78.42560840204165,
                    },
                    {
                        lat: 17.475521600848097,
                        lng: 78.42560840204165,
                    },
                    {
                        lat: 17.475521600848097,
                        lng: 78.42523168382165,
                    },
                ],
                label: "Tower A",
            },
            {
                floor_count: 19,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.476157344205816,
                        lng: 78.42454654584066,
                    },
                    {
                        lat: 17.47581163341652,
                        lng: 78.42510696138268,
                    },
                    {
                        lat: 17.475587191372384,
                        lng: 78.42495681586274,
                    },
                    {
                        lat: 17.47593290216168,
                        lng: 78.42439640032072,
                    },
                ],
                label: "Tower B",
            },
            {
                floor_count: 20,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.476560247980387,
                        lng: 78.42481378167362,
                    },
                    {
                        lat: 17.476218160991156,
                        lng: 78.42537732234356,
                    },
                    {
                        lat: 17.475996741446508,
                        lng: 78.42523156361035,
                    },
                    {
                        lat: 17.47633882843574,
                        lng: 78.42466802294041,
                    },
                ],
                label: "Tower C",
            },
            {
                floor_count: 19,
                floor_height_meters: 4,
                footprint: [
                    {
                        lat: 17.476834233271855,
                        lng: 78.42449938340924,
                    },
                    {
                        lat: 17.47671546299813,
                        lng: 78.42470426978967,
                    },
                    {
                        lat: 17.4759905089244,
                        lng: 78.42424853447848,
                    },
                    {
                        lat: 17.476109279198127,
                        lng: 78.42404364809805,
                    },
                ],
                label: "Tower D",
            },
        ],
        POI: {
            dining: [
                {
                    location: {
                        lat: 17.4673592,
                        lng: 78.4292906,
                    },
                    name: "Victoria Restaurant",
                    placeId: "ChIJKy7B2wGRyzsRe-q8zXkvm9U",
                },
                {
                    location: {
                        lat: 17.470358,
                        lng: 78.4277164,
                    },
                    name: "Hotel Devi Grand",
                    placeId: "ChIJe46BbwCRyzsRFDvNHa1GkAs",
                },
                {
                    location: {
                        lat: 17.4836652,
                        lng: 78.4122726,
                    },
                    name: "Chop sticks Chinese fast food",
                    placeId: "ChIJQXM3uKmRyzsRuNP2MCcvJh0",
                },
                {
                    location: {
                        lat: 17.4854426,
                        lng: 78.4128669,
                    },
                    name: "Vasista's Srilakshmi Takeaway",
                    placeId: "ChIJp_1RhruRyzsRNxRpqSl1Wmk",
                },
                {
                    location: {
                        lat: 17.4862425,
                        lng: 78.40627479999999,
                    },
                    name: "Apoorva Deluxe Mess",
                    placeId: "ChIJT1JDF5aRyzsRO2hpr9X0jDI",
                },
                {
                    location: {
                        lat: 17.455807,
                        lng: 78.4226247,
                    },
                    name: "Domino's Pizza",
                    placeId: "ChIJ9S0knxuRyzsRj3jbcMQ0yIw",
                },
                {
                    location: {
                        lat: 17.454601,
                        lng: 78.42336399999999,
                    },
                    name: "Rayudu Biryani House",
                    placeId: "ChIJze5y8huRyzsRoiNInamlqm4",
                },
                {
                    location: {
                        lat: 17.466842,
                        lng: 78.4295893,
                    },
                    name: "Best tea stall",
                    placeId: "ChIJqUzAaACRyzsR46Z1Xmrx9Xc",
                },
                {
                    location: {
                        lat: 17.4554119,
                        lng: 78.43457029999999,
                    },
                    name: "Cafe Melli & Bakery",
                    placeId: "ChIJIfQZ7eOQyzsR6B8ndQkZ-24",
                },
                {
                    location: {
                        lat: 17.49296,
                        lng: 78.40447549999999,
                    },
                    name: "Cream Stone",
                    placeId: "ChIJr7-kK5WRyzsRAZ42esP5KOo",
                },
                {
                    location: {
                        lat: 17.4930195,
                        lng: 78.4043021,
                    },
                    name: "McDonald's",
                    placeId: "ChIJ4T0AK5WRyzsRQOH0hkUmP7c",
                },
            ],
            hospital: [
                {
                    location: {
                        lat: 17.488504,
                        lng: 78.4464442,
                    },
                    name: "Sandhya Hospital",
                    placeId: "ChIJJziEC0SQyzsRA3QqhpCX0g8",
                },
                {
                    location: {
                        lat: 17.4848373,
                        lng: 78.4097091,
                    },
                    name: "Prerana Hospital",
                    placeId: "ChIJ9-84wbqRyzsRoLr7XAL9N8I",
                },
                {
                    location: {
                        lat: 17.477985,
                        lng: 78.424915,
                    },
                    name: "My Health At Home",
                    placeId: "ChIJhSNQ7OyRyzsRs6yl8vDn9nk",
                },
                {
                    location: {
                        lat: 17.4818604,
                        lng: 78.4132454,
                    },
                    name: "Nadipathy - Dr P Krishnam Raju | Nadi Pariksha, Detox Therapy & Acupuncture | Kukatpally, Hyderabad",
                    placeId: "ChIJmS4wS_ShyzsR3Q4sjAvi7Pw",
                },
                {
                    location: {
                        lat: 17.4829173,
                        lng: 78.4134263,
                    },
                    name: "Dr Saraja's Ayurvedic - Best Kshar Sutra Treatment, Piles, Fistula & Anal Fissure Specialist in Hyderabad, Kukatpally",
                    placeId: "ChIJj8QuYuqRyzsRMUVg_TAWIjM",
                },
                {
                    location: {
                        lat: 17.4828988,
                        lng: 78.41336369999999,
                    },
                    name: "People's Hospital",
                    placeId: "ChIJ00W4WKORyzsRbX5rG-oSSZ8",
                },
                {
                    location: {
                        lat: 17.4687812,
                        lng: 78.4141957,
                    },
                    name: "DakshinRehab Super Speciality Sports Injuries Physiotherapy Prosthetics Orthotics & Wellness Clinic",
                    placeId: "ChIJVVXlM0mXyzsRF8yvM5rB6FY",
                },
                {
                    location: {
                        lat: 17.4881726,
                        lng: 78.4150518,
                    },
                    name: "KANAMANENI DENTAL HOSPITAL",
                    placeId: "ChIJYZXOyL-RyzsRwMy-_2mSUYs",
                },
                {
                    location: {
                        lat: 17.48488099999999,
                        lng: 78.413167,
                    },
                    name: "satya physiotherapy & rehabilitation",
                    placeId: "ChIJETyCeLuRyzsRBcSwP5EanBc",
                },
                {
                    location: {
                        lat: 17.45625,
                        lng: 78.425703,
                    },
                    name: "Neelima Hospital",
                    placeId: "ChIJj-brXhyRyzsRwiwFY-l2Xm8",
                },
                {
                    location: {
                        lat: 17.489249,
                        lng: 78.40805019999999,
                    },
                    name: "Aakar Asha Hospital",
                    placeId: "ChIJTyYSPL6RyzsRM9BpOqOWC4I",
                },
                {
                    location: {
                        lat: 17.4952715,
                        lng: 78.4153563,
                    },
                    name: "Harsha Hospital Best Obstetrician Gynecologist Kukatpally",
                    placeId: "ChIJj87oCseRyzsRFJMh6a25gEs",
                },
                {
                    location: {
                        lat: 17.4542919,
                        lng: 78.4233763,
                    },
                    name: "SmileD",
                    placeId: "ChIJ____vyKRyzsRiwCEbIyzm8g",
                },
                {
                    location: {
                        lat: 17.4949739,
                        lng: 78.4120564,
                    },
                    name: "Mana Hospitals",
                    placeId: "ChIJrYvlt8CRyzsROp7ISSzoI20",
                },
                {
                    location: {
                        lat: 17.4561791,
                        lng: 78.4346566,
                    },
                    name: "SS Dental Care",
                    placeId: "ChIJqVanBOyQyzsR67VDQeMHfGE",
                },
            ],
            mall: [
                {
                    location: {
                        lat: 17.4929964,
                        lng: 78.4045165,
                    },
                    name: "South India Shopping Mall Textile & Jewellery - Kukatpally",
                    placeId: "ChIJs_p2K5WRyzsR3z58KyInXHc",
                },
                {
                    location: {
                        lat: 17.4764126,
                        lng: 78.423388,
                    },
                    name: "KDPL MALL",
                    placeId: "ChIJ-d-qHgCRyzsRAsnkHtBHFWs",
                },
                {
                    location: {
                        lat: 17.4770273,
                        lng: 78.42316749999999,
                    },
                    name: "Lake Shore Mall - Y Junction",
                    placeId: "ChIJ2bMpdQCRyzsRHgvasjNGPhY",
                },
                {
                    location: {
                        lat: 17.4763984,
                        lng: 78.4230036,
                    },
                    name: "TRENDS",
                    placeId: "ChIJQ8e2WXmRyzsR31N2IbBq_Jc",
                },
                {
                    location: {
                        lat: 17.477301,
                        lng: 78.423001,
                    },
                    name: "Max",
                    placeId: "ChIJX7u1Rk6RyzsRJDj7nX4YYWg",
                },
            ],
            office: [
                {
                    location: {
                        lat: 17.479773,
                        lng: 78.426975,
                    },
                    name: "VSP Industries",
                    placeId: "ChIJ9-84wbqRyzsRFscOkuHoOBw",
                },
                {
                    location: {
                        lat: 17.4801969,
                        lng: 78.4171029,
                    },
                    name: "Emami Ltd",
                    placeId: "ChIJ37ZrTf6hyzsRejW7XzCru1Y",
                },
                {
                    location: {
                        lat: 17.4357059,
                        lng: 78.38314489999999,
                    },
                    name: "International Tech Park Hyderabad.",
                    placeId: "ChIJ6U8bC1iRyzsRq0tMYJgzRYY",
                },
                {
                    location: {
                        lat: 17.4457141,
                        lng: 78.3971127,
                    },
                    name: "Trendz tech park",
                    placeId: "ChIJ8wtwLgCRyzsRe0vXwXU0h6U",
                },
                {
                    location: {
                        lat: 17.4077255,
                        lng: 78.3254039,
                    },
                    name: "Poojitha Tech Park",
                    placeId: "ChIJKVXvIAKVyzsRE6UTC1ebcMI",
                },
                {
                    location: {
                        lat: 17.4227794,
                        lng: 78.34718749999999,
                    },
                    name: "Sohini Tech Park",
                    placeId: "ChIJQ33dPXmTyzsRjfAB2hOX46g",
                },
                {
                    location: {
                        lat: 17.4225956,
                        lng: 78.3446093,
                    },
                    name: "Vamsiram Jyothi Tech Park",
                    placeId: "ChIJncUaqi-TyzsRhZQ9dvwsnm4",
                },
            ],
            school: [
                {
                    location: {
                        lat: 17.4951062,
                        lng: 78.4108432,
                    },
                    name: "D A V Public School - Main Block",
                    placeId: "ChIJXd3W7MCRyzsRQyaIP8VPvV0",
                },
                {
                    location: {
                        lat: 17.469146,
                        lng: 78.4189439,
                    },
                    name: "Bachpan Play School in Moosapet | Best Preschool Near Me | Nursery School & Kindergarten for Your Child’s Bright Start",
                    placeId: "ChIJXzJ63QeRyzsRTRm70JFW6e0",
                },
                {
                    location: {
                        lat: 17.470613,
                        lng: 78.4228858,
                    },
                    name: "Sri Sai Vidyanikethan High School",
                    placeId: "ChIJS02-XgeRyzsRMuvNdR1uXCI",
                },
                {
                    location: {
                        lat: 17.4686794,
                        lng: 78.4297599,
                    },
                    name: "Sri Satya Sai Vidya Mandir",
                    placeId: "ChIJFddJf6qRyzsR6V-l4ngHnl0",
                },
                {
                    location: {
                        lat: 17.4889033,
                        lng: 78.4152563,
                    },
                    name: "Brilliant Grammar High School",
                    placeId: "ChIJe0LadrmRyzsRKs275CPOppw",
                },
                {
                    location: {
                        lat: 17.4691866,
                        lng: 78.4389731,
                    },
                    name: "Radcliffe School, Hyderabad | Best CBSE School in Balanagar",
                    placeId: "ChIJNVHufwqZyzsRuB2ksGOnrb8",
                },
                {
                    location: {
                        lat: 17.4801969,
                        lng: 78.4171029,
                    },
                    name: "Vignan Convent School",
                    placeId: "ChIJG4Lch82ZyzsR7r_PZyI5Drk",
                },
                {
                    location: {
                        lat: 17.4723688,
                        lng: 78.4214252,
                    },
                    name: "Little Angel Grammar School",
                    placeId: "ChIJnz17yqmRyzsRYxqJ1xwQL3U",
                },
                {
                    location: {
                        lat: 17.4773574,
                        lng: 78.4258132,
                    },
                    name: "TWINKLE STARS SCHOOL",
                    placeId: "ChIJsXZacayRyzsRVKdXzL1Jetc",
                },
                {
                    location: {
                        lat: 17.480609,
                        lng: 78.41871069999999,
                    },
                    name: "I Play I Learn",
                    placeId: "ChIJX5k0ja-RyzsR6YxN6r38vjY",
                },
                {
                    location: {
                        lat: 17.4706303,
                        lng: 78.4201623,
                    },
                    name: "Balatarang Pre n Play School - Moosapet",
                    placeId: "ChIJqRSpiQeRyzsRQKz4LJ1R8Tg",
                },
                {
                    location: {
                        lat: 17.4839816,
                        lng: 78.4246833,
                    },
                    name: "Kidzee - Mythri Nagar",
                    placeId: "ChIJQ1OSEKWRyzsRgINclkW3dmY",
                },
                {
                    location: {
                        lat: 17.4747724,
                        lng: 78.4169059,
                    },
                    name: "The Creek Planet School - Neptune Campus",
                    placeId: "ChIJAdeZa6aRyzsR9UHhLJr51q8",
                },
                {
                    location: {
                        lat: 17.4801969,
                        lng: 78.4171029,
                    },
                    name: "HAPPY HOME SPECIAL SCHOOL",
                    placeId: "ChIJnZ2qbaWRyzsRDLUVKA2-P_Y",
                },
                {
                    location: {
                        lat: 17.4689923,
                        lng: 78.4199419,
                    },
                    name: "S M MODEL SCHOOL",
                    placeId: "ChIJv44evweRyzsRbtKxwGiX9xg",
                },
            ],
            transit: [
                {
                    location: {
                        lat: 17.476826,
                        lng: 78.42211460000001,
                    },
                    name: "Dr B.R. Ambedkar Balanagar Metro Station",
                    placeId: "ChIJDZc-f6WRyzsRywMwFTzr6JY",
                },
                {
                    location: {
                        lat: 17.4674643,
                        lng: 78.4444614,
                    },
                    name: "Balanagar Bus Stop",
                    placeId: "ChIJz6Of3PaQyzsRSfuAh22cY4g",
                },
                {
                    location: {
                        lat: 17.5576448,
                        lng: 78.3144636,
                    },
                    name: "ORR Exit Number 4",
                    placeId: "ChIJk4HfELSNyzsR4bS7bC69AdI",
                },
            ],
        },
        possession: "2029-08-30 18:30:00.000Z",
        area_in_acres: 6.6,
        total_units: 676,
    },
];
