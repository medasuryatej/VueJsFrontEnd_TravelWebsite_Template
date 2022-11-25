create table SEARCH_HISTORY (
	id INT,
	membershipID VARCHAR(40),
	source_city VARCHAR(50),
	destination_city VARCHAR(50),
	start_date DATE,
	end_date DATE,
	number_of_stops INT,
	trip_type VARCHAR(50)
);
insert into SEARCH_HISTORY (id, membershipID, source_city, destination_city, start_date, end_date, number_of_stops, trip_type) values (1, '677c7184-ad3a-4521-9cbc-a082ba7fb0d8', 'Xinzhou', 'Arshaluys', '2022-08-07', '2022-11-24', 1, 'one-way');
insert into SEARCH_HISTORY (id, membershipID, source_city, destination_city, start_date, end_date, number_of_stops, trip_type) values (2, 'c90df693-778f-44f8-8bec-167b9d0d3490', 'Brisbane', 'El Obeid', '2022-01-19', '2022-04-23', 2, 'one-way');
insert into SEARCH_HISTORY (id, membershipID, source_city, destination_city, start_date, end_date, number_of_stops, trip_type) values (3, '757a04ac-26b7-4e3b-af1f-fbc3b6043669', 'Saint-Maurice-l''Exil', 'Luanshya', '2022-10-06', '2022-10-04', 2, 'one-way');
insert into SEARCH_HISTORY (id, membershipID, source_city, destination_city, start_date, end_date, number_of_stops, trip_type) values (4, 'b1db353f-055f-4e77-ad0b-d53b91316694', 'Xiangquan', 'Caballococha', '2022-01-09', '2022-07-05', 3, 'one-way');
insert into SEARCH_HISTORY (id, membershipID, source_city, destination_city, start_date, end_date, number_of_stops, trip_type) values (5, '3e2f55f5-2924-42b4-b6bf-599e3a0d0c51', 'Pataypampa', 'Nal’chik', '2022-10-21', '2022-03-05', 1, 'one-way');