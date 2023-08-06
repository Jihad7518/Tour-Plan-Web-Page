
const data = [
	{
		id: 1,
		name: "Cox's Bazar",
		info: "Cox's Bazar is a town on the southeast coast of Bangladesh. It's known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts.",
		image: "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/10/e2/f8/43/longest-sea-beach-in.jpg",
		price: "8,758 BDT",
	},
	{
		id: 2,
		name: "Saint Martin",
		info: `Saint Martin is part of the Leeward Islands in the Caribbean Sea. It comprises 2 separate countries, divided between its northern French side, called Saint-Martin, and its southern Dutch side, Sint Maarten. The island is home to busy resort beaches and secluded coves.`,
		image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FpbnQlMjBtYXJ0aW4lMjBpc2xhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
		price: "10,560 BDT",
	},
	{
		id: 3,
		name: "Nijhum Dwip, Noakhali",
		info: " Nijhum Dwip (Silent Island') is a small island under Hatiya Upazila of Noakhali District. It is a cluster of islands that emerged in the early 1950s. The main attraction is the herd of about 5000 cheetal or spotted deer, monkeys, a huge number of mated birds come in the winter season, enhancing the beauty of this island. Now this island has been declared as the unique eco-tourist spot.",
		image: "https://prod-media-eng.dhakatribune.com/uploads/2020/08/caption-deers-grazing-in-nijhum-dwip-inundated-by-tidal-surges-and-incessant-rainfall-dhaka-tribune-1-1598622153735.jpg",
		price: "4,695 BDT",
	},
	{
		id: 4,
		name: "Sundarbans",
		info: "Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. Sundarban Reserve Forest of Bangladesh is the largest mangrove forest in the world.",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sundarban_Tiger.jpg/284px-Sundarban_Tiger.jpg",
		price: "12,095 BDT",
	},
	{
		id: 5,
		name: "Rangamati",
		info: "Rangamati is the administrative headquarter and town of Rangamati Hill District in the Chittagong Hill Tracts of Bangladesh. The town is located at 22°37'60N 92°12'0E and has an altitude of 14 metres. From Chittagong a 77 kilometres road leads to Rangamati.",
		image: "https://t4.ftcdn.net/jpg/05/43/00/19/360_F_543001997_nYoMNochVF0DMhMImirztq1DovAUyMga.jpg",
		price: "8,595 BDT",
	},
	{
		id: 6,
		name: "Bandarban",
		info: "Bandarban Hill District is the most remote and least populated district in Bangladesh. The lure of the tallest peaks of Bangladesh, treks through virgin forests and chance to meet more than 15 tribes of the region up close is growing both among Bangladeshis and tourists from other countries. ",
		image: "https://sgp1.digitaloceanspaces.com/cosmosgroup-dc/news/fRpu7V0HrMymv4FUw3zNukBxqEwXp7JkpXWnQX3x.jpeg",
		price: "8,878 BDT",
	},
	{
		id: 7,
		name: "Jaflong, Sylhet",
		info: "Jaflong is a hill station and tourist destination in the Division of Sylhet, Bangladesh. It is located in Gowainghat Upazila of Sylhet District and situated at the border between Bangladesh and the Indian state of Meghalaya, overshadowed by subtropical mountains and rainforests.",
		image: "https://www.travelmate.com.bd/wp-content/uploads/2019/07/Jaflong-Travel.jpg",
		price: "5,595 BDT",
	},
	{
		id: 8,
		name: "Khagrachari",
		info: "Khagrachhari is the natural wild beauty of Bangladesh. Here you can visit the tribal lifestyle of Chakmas in Khagrachari. You can also visit Alu tila hill. Approximately 100 meters long a very dark Cave is the mysterious beauty of Alu tila hill. Khagrachari hill district (east-southern region of Bangladesh) is full of hills and waterfalls.",
		image: "https://live.staticflickr.com/3849/32948962603_7164d5cedf_b.jpg",
		price: "6,298 BDT",
	},
	{
		id: 9,
		name: "Kuakata",
		info: "Kuakata is a town in southern Bangladesh known for its panoramic sea beach. Kuakata beach is a sandy expanse 18 kilometres long and 3 kilometres wide. From the beach one can have an unobstructed view of both sunrise and sunset over the Bay of Bengal.",
		image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjubRU_G7eJDw7yiwI1SWcCo_JlXDLxr-b5YO_Hq2IV1VqBW5a7Lj-elHulaYylgyB6sOn9Hz5rPf1IemRtZBI3wGZlv5KKkYN6rGK_rHeqcE4j08wXiqJqkD-KGb_U-kp9MMpeLYBgX40nB9BIa-SjCHwpx8stErD5dV9T14sH_FjPYewF90x44m0gfA/w640-h426/rashedul-islam-hridoy-jQetJK7FiHI-unsplash.jpg",
		price: "7,795 BDT",
	},
	{
		id: 10,
		name: "Rangpur",
		info: "Rangpur is one of the major cities in Bangladesh and Rangpur Division. Rangpur was declared a district headquarters on December 16, 1769, and established as a municipality in 1869, making it one of the oldest municipalities in Bangladesh.",
		image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/70/51/caption.jpg?w=600&h=500&s=1",
		price: "3,555 BDT",
	},
	{
		id: 11,
		name: "Rajshahi",
		info: "Rajshahi is a metropolitan city and a major urban, commercial and educational centre of Bangladesh. It is also the administrative seat of the eponymous division and district. Rajshahi is famous for Rajshahi silk, which has a special status as clothing material in the Indian subcontinent. Rajshahi is the home of the region's best mangoes and lichis.",
		image: "https://i.ytimg.com/vi/vL0cayp_Pxg/maxresdefault.jpg",
		price: "3,535 BDT",
	},
];

export default data;
