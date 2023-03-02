
--
-- PostgreSQL database dump
--

-- Dumped from database version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.13 (Ubuntu 12.13-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: class_ice_cream_survey; Type: TABLE; Schema: public; Owner: lucas
--

CREATE TABLE class_ice_cream_survey (
  name text,
  age integer,
  favorite_flavor text
);

ALTER TABLE public.class_ice_cream_survey OWNER TO lucas;

--
-- Data for Name: class_ice_cream_survey; Type: TABLE DATA; Schema: public; Owner: lucas
--

COPY public.class_ice_cream_survey (name, age, favorite_flavor) FROM stdin;
('Afia',	6,	'Strawberry'),
('Ben',	6,	'Chocolate'),
('Clara',	6,	'Strawberry'),
('David',	7,	'Rocky Road'),
('Emma',	6,	'Vanilla'),
('Jian',	7,	'Chocolate'),
('Juana',	6,	'Chocolate'),
('Kayla'	,7	,'Vanilla'),
('Michael',	6,	'Chocolate'),
('Sofia',	7,	'Chocolate'),
('Taylor',	6,	'Strawberry'),
('Zoe',	7,	'Chocolate');
\.

--
-- PostgreSQL database dump complete
--