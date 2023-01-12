create database gaana;
use gaana;
#user table
 create table user (id integer primary key auto_increment, fname varchar(40), lname varchar(40), email varchar (40), pwd varchar(100), isactive int(1), created_timestamp TIMESTAMP default CURRENT_TIMESTAMP);

#artist table
create table artist(id integer primary key auto_increment, fname varchar(40), lname varchar(40),thumbnail varchar(40), 
created_timestamp TIMESTAMP default CURRENT_TIMESTAMP);

#songs table
create table songs (id integer primary key auto_increment,title varchar(50), thumbnail varchar(40), duration varchar(10),artistid ine,constraint fk foreign key (artistid) references artist(id), created_timestamp TIMESTAMP default CURRENT_TIMESTAMP);

#albums table
create table album (id integer primary key auto_increment, title varchar(40), thumbnail varchar(40), duration varchar(10), created_timestamp TIMESTAMP default CURRENT_TIMESTAMP);