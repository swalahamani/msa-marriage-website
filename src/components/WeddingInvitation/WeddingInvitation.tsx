"use client";

import React, {useState, FC} from "react";
import {
	Calendar,
	MapPin,
	Heart,
	Phone,
	Clock,
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
}

interface iWeddingInvitationProps {
	// Add any props if needed in the future
}

// NavButton component extracted as a separate component
const NavButton: FC<iNavButtonProps> = ({
	section,
	icon: Icon,
	label,
	isActive,
	onClick,
}) => (
	<button
		onClick={() => onClick(section)}
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

const WeddingInvitation: FC<iWeddingInvitationProps> = () => {
	// State for active section
	const [activeSection, setActiveSection] = useState("home");

	// Handler for calendar event creation
	const addToCalendar = () => {
		const event = {
			title: "Wedding Reception - Swalah & Neha",
			start:
				new Date("2025-08-03T18:00:00")
					.toISOString()
					.replace(/[-:]/g, "")
					.split(".")[0] + "Z",
			end:
				new Date("2025-08-03T22:00:00")
					.toISOString()
					.replace(/[-:]/g, "")
					.split(".")[0] + "Z",
			location: "Sienna Auditorium, Wandoor, Kerala 679328",
			description: "Wedding Reception of Swalah and Neha",
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
			distance: "15 km from venue",
		},
		{
			name: "Adyanpara Waterfalls",
			description: "Scenic waterfall perfect for nature photography",
			distance: "20 km from venue",
		},
		{
			name: "Conolly's Plot",
			description: "Asia's oldest teak plantation with 150+ year old trees",
			distance: "18 km from venue",
		},
		{
			name: "Nedumkayam Rainforest",
			description: "Dense tropical rainforest with diverse wildlife",
			distance: "25 km from venue",
		},
		{
			name: "Chaliyar River",
			description: "Beautiful river perfect for boating and relaxation",
			distance: "12 km from venue",
		},
	];

	// Hospitals data
	const hospitals: iHospital[] = [
		{
			name: "Wandoor NIMS Hospital",
			address: "Wandoor, Malappuram",
			phone: "+91 493 421 1234",
			distance: "1.5 km from venue",
		},
		{
			name: "Wandoor Community Health Centre",
			address: "Wandoor, Malappuram",
			phone: "+91 493 421 2345",
			distance: "2 km from venue",
		},
		{
			name: "KMCT Medical College Hospital",
			address: "Manassery, Mukkam",
			phone: "+91 495 229 4712",
			distance: "8 km from venue",
		},
		{
			name: "Nilambur Taluk Hospital",
			address: "Nilambur, Malappuram",
			phone: "+91 493 422 2216",
			distance: "15 km from venue",
		},
	];

	// Render functions for different sections
	const renderHomeSection = () => (
		<div className="max-w-2xl mx-auto px-4">
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
							<p className="text-gray-600">6:00 PM onwards</p>
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
			<div className="grid md:grid-cols-2 gap-6">
				{/* No Gifts Message */}
				<div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-400">
					<div className="flex items-center mb-4">
						<Heart className="w-6 h-6 text-blue-500 mr-3" />
						<h3 className="text-lg font-medium text-gray-800">About Gifts</h3>
					</div>
					<p className="text-gray-600 text-sm leading-relaxed">
						We have everything we need to start our journey together. Your love,
						laughter, and presence are the only gifts that truly matter to us!
						<span className="font-medium text-blue-600">
							{" "}
							Please don't bring any gifts
						</span>{" "}
						- your blessings are more than enough. 💙
					</p>
				</div>

				{/* No Photos Message */}
				<div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-400">
					<div className="flex items-center mb-4">
						<Camera className="w-6 h-6 text-indigo-500 mr-3" />
						<h3 className="text-lg font-medium text-gray-800">Let's Connect</h3>
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
		</div>
	);

	const renderExploreSection = () => (
		<div className="max-w-4xl mx-auto px-4">
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
				{touristSpots.map((spot, index) => (
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
				))}
			</div>

			<div className="mt-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl p-8 text-white text-center">
				<h3 className="text-xl font-light mb-2">Plan Your Stay</h3>
				<p className="text-blue-100">
					Make the most of your visit to this beautiful region of Kerala
				</p>
			</div>
		</div>
	);

	const renderEmergencySection = () => (
		<div className="max-w-3xl mx-auto px-4">
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
				<div className="text-red-700">
					<p className="font-medium">Wedding Coordinator</p>
					<a
						href="tel:+919876543210"
						className="text-red-600 hover:text-red-800 underline"
					>
						+91 98765 43210
					</a>
				</div>
			</div>

			{/* Hospitals */}
			<div className="space-y-6">
				<h3 className="text-xl font-light text-gray-800 flex items-center">
					<Building className="w-6 h-6 text-blue-500 mr-3" />
					Nearby Hospitals
				</h3>

				{hospitals.map((hospital, index) => (
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
								{hospital.phone}
							</a>
							<a
								href={`https://www.google.com/maps/search/${encodeURIComponent(hospital.name + " " + hospital.address)}`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 px-3 py-1 rounded-full transition-colors duration-300"
							>
								Directions
							</a>
						</div>
					</div>
				))}
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

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
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

			{/* Main Content */}
			<div className="pt-20 pb-8">
				{activeSection === "home" && renderHomeSection()}
				{activeSection === "explore" && renderExploreSection()}
				{activeSection === "emergency" && renderEmergencySection()}
			</div>
		</div>
	);
};

export default WeddingInvitation;
