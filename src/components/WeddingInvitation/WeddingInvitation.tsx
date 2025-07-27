"use client";

import React, {useState, FC} from "react";

import {
	Calendar,
	MapPin,
	Heart,
	Phone,
	Users,
	Camera,
	Building,
	Star,
	AlertTriangle,
} from "lucide-react";
import {LucideIcon} from "lucide-react";

interface iNavButtonProps {
	section: string;
	icon: LucideIcon;
	label: string;
	isActive: boolean;
	onClick: (section: string) => void;
}

interface iTouristSpot {
	name: string;
	description: string;
	distance: string;
}

interface iHospital {
	name: string;
	address: string;
	phone: string;
	distance: string;
	direction: string;
}

interface iWeddingInvitationProps {
	// Add any props if needed in the future
}

// NavButton component extracted as a separate component
const NavButton: FC<iNavButtonProps> = ({
	section,
	// eslint-disable-next-line @typescript-eslint/naming-convention
	icon: Icon,
	label,
	isActive,
	onClick,
}) => {
	return (
		<button
			onClick={() => {
				return onClick(section);
			}}
			className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
				isActive
					? "bg-blue-100 text-blue-700 shadow-sm"
					: "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
			}`}
		>
			<Icon size={18} />
			<span className="hidden sm:inline">{label}</span>
		</button>
	);
};

// Mobile NavButton component with text always visible
const MobileNavButton: FC<iNavButtonProps> = ({
	section,
	// eslint-disable-next-line @typescript-eslint/naming-convention
	icon: Icon,
	label,
	isActive,
	onClick,
}) => {
	return (
		<button
			onClick={() => {
				return onClick(section);
			}}
			className={`flex flex-col items-center justify-center space-y-1 flex-1 py-2 transition-all duration-300 ${
				isActive
					? "text-blue-600 relative after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-12 after:h-1 after:bg-blue-500 after:rounded-full"
					: "text-gray-500"
			}`}
		>
			<Icon size={22} strokeWidth={isActive ? 2.5 : 1.5} />
			<span className={`text-xs ${isActive ? "font-semibold" : "font-medium"}`}>
				{label}
			</span>
		</button>
	);
};

const WeddingInvitation: FC<iWeddingInvitationProps> = () => {
	// State for active section
	const [activeSection, setActiveSection] = useState("home");

	// Handler for calendar event creation
	const addToCalendar = () => {
		const event = {
			title: "Wedding Reception - Swalah & Neha",
			start:
				new Date("2025-08-03T05:30:00")
					.toISOString()
					.replace(/[-:]/g, "")
					.split(".")[0] + "Z",
			end:
				new Date("2025-08-03T09:30:00")
					.toISOString()
					.replace(/[-:]/g, "")
					.split(".")[0] + "Z",
			location: "Sienna Auditorium, Wandoor, Kerala 679328",
			description:
				"Wedding Reception of Swalah and Neha (11:00 AM to 03:00 PM IST)\nVenue: Sienna Auditorium, Wandoor, Kerala\nGoogle Maps: https://maps.app.goo.gl/rRnxUK1cCGVo8b5Y9",
		};

		const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.description)}`;
		window.open(googleCalendarUrl, "_blank");
	};

	// Tourist spots data
	const touristSpots: iTouristSpot[] = [
		{
			name: "Nilambur Teak Museum",
			description:
				"World's first teak museum showcasing the history of teak plantation",
			distance: "17.2 km from venue",
		},
		{
			name: "Adyanpara Waterfalls",
			description: "Scenic waterfall perfect for nature photography",
			distance: "28.5 km from venue",
		},
		{
			name: "Conolly's Plot",
			description: "Asia's oldest teak plantation with 150+ year old trees",
			distance: "11 km from venue",
		},
		{
			name: "Nedumkayam Rainforest",
			description: "Dense tropical rainforest with diverse wildlife",
			distance: "22.7 km from venue",
		},
	];

	// Hospitals data
	const hospitals: iHospital[] = [
		{
			name: "NIMS Multi Speciality Hospital",
			address: "Kalikavu Road, Vaniyambalam Post, Wandoor, Kerala 679328",
			phone: "",
			distance: "500 meters from venue",
			direction: "https://maps.app.goo.gl/rnL7ddEgasCQZRrA6",
		},
		{
			name: "Government Taluk Hospital, Wandoor",
			address: "Hospital Road, Wandoor, Malappuram, Kerala 679328",
			phone: "",
			distance: "850 meters from venue",
			direction: "https://maps.app.goo.gl/bcKaUpJQ9cTkwjGYA9",
		},
		{
			name: "Jafar Medical Centre",
			address: "Kalikavu Road, Wandoor, Malappuram, Kerala 679328",
			phone: "",
			distance: "300 meters from venue",
			direction: "https://maps.app.goo.gl/FA3ihg7NkHKw8eyj9",
		},
	];

	// Render functions for different sections
	const renderHomeSection = () => {
		return (
			<div className="max-w-2xl mx-auto px-4 pb-24 md:pb-8">
				{/* Header */}
				<div className="text-center mb-12">
					<div className="mb-6">
						<Heart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
						<h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">
							Swalah <span className="text-blue-400">&</span> Neha
						</h1>
						<p className="text-gray-600 text-lg">are getting married</p>
					</div>
				</div>

				{/* Reception Details */}
				<div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
					<div className="text-center mb-8">
						<h2 className="text-2xl font-light text-gray-800 mb-2">
							Wedding Reception
						</h2>
						<div className="w-16 h-0.5 bg-blue-400 mx-auto"></div>
					</div>

					<div className="space-y-6">
						<div className="flex items-start space-x-4">
							<Calendar className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
							<div>
								<h3 className="font-medium text-gray-800">Date & Time</h3>
								<p className="text-gray-600">Sunday, 3rd August 2025</p>
								<p className="text-gray-600">11:00 AM onwards</p>
							</div>
						</div>

						<div className="flex items-start space-x-4">
							<MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
							<div>
								<h3 className="font-medium text-gray-800">Venue</h3>
								<p className="text-gray-600">Sienna Auditorium</p>
								<p className="text-gray-600 text-sm">56VR+JV3, C H Bypass Rd</p>
								<p className="text-gray-600 text-sm">Wandoor, Kerala 679328</p>
								<a
									href="https://maps.app.goo.gl/rRnxUK1cCGVo8b5Y9"
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-500 hover:text-blue-600 text-sm underline"
								>
									View on Map
								</a>
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 mt-8">
						<button
							onClick={addToCalendar}
							className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors duration-300 flex items-center justify-center space-x-2"
						>
							<Calendar size={20} />
							<span>Add to Calendar</span>
						</button>
						<a
							href="https://maps.app.goo.gl/rRnxUK1cCGVo8b5Y9"
							target="_blank"
							rel="noopener noreferrer"
							className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full transition-colors duration-300 flex items-center justify-center space-x-2"
						>
							<MapPin size={20} />
							<span>Get Directions</span>
						</a>
					</div>
				</div>

				{/* RSVP */}
				<div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white text-center mb-8">
					<Users className="w-8 h-8 mx-auto mb-4" />
					<h3 className="text-xl font-light mb-2">
						Your Presence is Our Present
					</h3>
					<p className="text-blue-100">
						We look forward to celebrating this special day with you
					</p>
				</div>

				{/* Special Messages */}
				<div className="flex flex-col gap-6">
					{/* No Gifts Message */}
					<div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-400">
						<div className="flex items-center mb-4">
							<Heart className="w-6 h-6 text-blue-500 mr-3" />
							<h3 className="text-lg font-medium text-gray-800">About Gifts</h3>
						</div>
						<p className="text-gray-600 text-sm leading-relaxed">
							We have everything we need to start our journey together. Your
							love, laughter, and presence are the only gifts that truly matter
							to us!
							<span className="font-medium text-blue-600">
								{" "}
								Please don't bring any gifts
							</span>{" "}
							- your blessings are more than enough. 💙
						</p>
						<p className="text-gray-600 text-sm leading-relaxed mt-3">
							If you truly wish to give something, we'd be honored if you'd
							consider making a donation to the{" "}
							<a
								href="https://go.swalah.co/msa-marriage-donate-wfp"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-600 hover:text-blue-800 underline"
							>
								World Food Programme
							</a>
							. Your contribution could help provide meals to those who need
							them most, spreading love beyond our celebration.
						</p>
					</div>

					{/* No Photos Message */}
					<div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-400">
						<div className="flex items-center mb-4">
							<Camera className="w-6 h-6 text-indigo-500 mr-3" />
							<h3 className="text-lg font-medium text-gray-800">
								Let's Connect
							</h3>
						</div>
						<p className="text-gray-600 text-sm leading-relaxed">
							We're keeping it old-school -{" "}
							<span className="font-medium text-indigo-600">
								no photo sessions or cameras, please!
							</span>
							We'd love for everyone to be fully present, sharing stories,
							laughter, and creating real connections. Let's capture memories in
							our hearts rather than on our phones. Trust us, the conversations
							will be way more entertaining than any selfie! 📱➡️💬
						</p>
					</div>
				</div>

				{/* Section Navigation Cards */}
				<div className="mt-12 mb-4">
					<h3 className="text-xl font-light text-center text-gray-800 mb-6">
						Discover More
					</h3>
					<div className="grid gap-4">
						<button
							onClick={() => {
								return setActiveSection("explore");
							}}
							className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-5 text-white text-left transition-transform hover:scale-[1.02] flex items-center"
						>
							<div className="bg-white/20 rounded-full p-3 mr-4">
								<Camera className="w-6 h-6" />
							</div>
							<div>
								<h4 className="text-lg font-medium">Explore Nilambur</h4>
								<p className="text-sm text-blue-100">
									Discover beautiful places near the venue
								</p>
							</div>
						</button>

						<button
							onClick={() => {
								return setActiveSection("emergency");
							}}
							className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-5 text-white text-left transition-transform hover:scale-[1.02] flex items-center"
						>
							<div className="bg-white/20 rounded-full p-3 mr-4">
								<AlertTriangle className="w-6 h-6" />
							</div>
							<div>
								<h4 className="text-lg font-medium">Emergency Information</h4>
								<p className="text-sm text-red-100">
									Important contacts and medical facilities
								</p>
							</div>
						</button>
					</div>
				</div>
			</div>
		);
	};

	const renderExploreSection = () => {
		return (
			<div className="max-w-4xl mx-auto px-4 pb-24 md:pb-8">
				<div className="text-center mb-12">
					<Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
					<h2 className="text-3xl font-light text-gray-800 mb-2">
						Explore Nilambur
					</h2>
					<p className="text-gray-600">
						Discover beautiful places near the venue
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{touristSpots.map((spot, index) => {
						return (
							<div
								key={index}
								className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
							>
								<div className="p-6">
									<div className="flex items-start justify-between mb-3">
										<h3 className="text-lg font-medium text-gray-800">
											{spot.name}
										</h3>
										<Star className="w-5 h-5 text-yellow-400 flex-shrink-0" />
									</div>
									<p className="text-gray-600 mb-3">{spot.description}</p>
									<div className="flex items-center justify-between">
										<div className="flex items-center text-sm text-blue-500">
											<MapPin size={16} className="mr-1" />
											{spot.distance}
										</div>
										<a
											href={`https://www.google.com/maps/search/${encodeURIComponent(spot.name + " Nilambur Kerala")}`}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-full transition-colors duration-300"
										>
											Directions
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	};

	const renderEmergencySection = () => {
		return (
			<div className="max-w-3xl mx-auto px-4 pb-24 md:pb-8">
				<div className="text-center mb-12">
					<AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
					<h2 className="text-3xl font-light text-gray-800 mb-2">
						Emergency Information
					</h2>
					<p className="text-gray-600">
						Important contacts and nearby medical facilities
					</p>
				</div>

				{/* Emergency Contact */}
				<div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
					<div className="flex items-center space-x-3 mb-4">
						<Phone className="w-6 h-6 text-red-500" />
						<h3 className="text-lg font-medium text-red-800">
							Emergency Contact
						</h3>
					</div>
					<div className="space-y-4">
						<div className="text-red-700">
							<p className="font-medium">Salman Faris</p>
							<p className="text-red-600">
								Please use the number received in the invitation DM
							</p>
							<p className="text-sm text-gray-600 mt-1">
								Languages Spoken: Malayalam & English
							</p>
						</div>
						<div className="text-red-700">
							<p className="font-medium">Muhammad Swalah</p>
							<p className="text-red-600">
								Please use the number received in the invitation DM
							</p>
							<p className="text-sm text-gray-600 mt-1">
								Languages Spoken: Malayalam & English
							</p>
						</div>
					</div>
				</div>

				{/* Hospitals */}
				<div className="space-y-6">
					<h3 className="text-xl font-light text-gray-800 flex items-center">
						<Building className="w-6 h-6 text-blue-500 mr-3" />
						Nearby Hospitals
					</h3>

					{hospitals.map((hospital, index) => {
						return (
							<div
								key={index}
								className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
							>
								<div className="flex items-start justify-between mb-3">
									<h4 className="text-lg font-medium text-gray-800">
										{hospital.name}
									</h4>
									<span className="text-sm text-blue-500 bg-blue-50 px-2 py-1 rounded-full">
										{hospital.distance}
									</span>
								</div>
								<p className="text-gray-600 mb-2">{hospital.address}</p>
								<div className="flex items-center justify-between">
									<a
										href={`tel:${hospital.phone}`}
										className="flex items-center text-blue-600 hover:text-blue-800"
									>
										<Phone size={16} className="mr-2" />
										{hospital.phone || "No phone available"}
									</a>
									<a
										href={hospital.direction}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-full transition-colors duration-300"
									>
										Directions
									</a>
								</div>
							</div>
						);
					})}
				</div>

				<div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
					<p className="text-blue-800">
						<strong>General Emergency:</strong> Dial{" "}
						<a href="tel:112" className="underline">
							112
						</a>{" "}
						for immediate assistance
					</p>
				</div>
			</div>
		);
	};

	// Render the appropriate section based on activeSection
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
			{/* Desktop/Tablet Navigation */}
			<nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 hidden md:block">
				<div className="max-w-4xl mx-auto px-4 py-3">
					<div className="flex justify-center space-x-2 overflow-x-auto">
						<NavButton
							section="home"
							icon={Heart}
							label="Invitation"
							isActive={activeSection === "home"}
							onClick={setActiveSection}
						/>
						<NavButton
							section="explore"
							icon={Camera}
							label="Explore"
							isActive={activeSection === "explore"}
							onClick={setActiveSection}
						/>
						<NavButton
							section="emergency"
							icon={AlertTriangle}
							label="Emergency"
							isActive={activeSection === "emergency"}
							onClick={setActiveSection}
						/>
					</div>
				</div>
			</nav>
			{/* Main Content with padding for top nav on desktop */}
			<div className="md:pt-20">
				{activeSection === "home" && renderHomeSection()}
				{activeSection === "explore" && renderExploreSection()}
				{activeSection === "emergency" && renderEmergencySection()}
			</div>
			{/* Mobile Bottom Navigation */}
			<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
				<div className="flex items-center justify-around">
					<MobileNavButton
						section="home"
						icon={Heart}
						label="Invitation"
						isActive={activeSection === "home"}
						onClick={setActiveSection}
					/>
					<MobileNavButton
						section="explore"
						icon={Camera}
						label="Explore"
						isActive={activeSection === "explore"}
						onClick={setActiveSection}
					/>
					<MobileNavButton
						section="emergency"
						icon={AlertTriangle}
						label="Emergency"
						isActive={activeSection === "emergency"}
						onClick={setActiveSection}
					/>
				</div>
			</nav>
		</div>
	);
};

export default WeddingInvitation;
