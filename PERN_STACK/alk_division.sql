-- Adminer 4.8.1 PostgreSQL 11.12 (Ubuntu 11.12-1.pgdg18.04+1) dump

\connect "alkem_dev_db";

CREATE TABLE "public"."alk_division" (
    "division_name" character varying(150),
    "flag" character varying(50),
    "division_code" character varying(50)
) WITH (oids = false);

CREATE INDEX "alk_division_division_code" ON "public"."alk_division" USING btree ("division_code");

TRUNCATE "alk_division";
INSERT INTO "alk_division" ("division_name", "flag", "division_code") VALUES
('FUTURA',	'Generic',	'7'),
('HEALTH CARE(Generic)',	'Generic',	'13'),
('ALKEM ARISE',	'Ethical',	'4'),
('PENTACARE',	'Ethical',	'6'),
('ALKEM ONCOLOGY',	'Ethical',	'14'),
('ASPIRIA',	'Ethical',	'20'),
('PRIZMA',	'Ethical',	'21'),
('ACE-SUPREMA',	'Ethical',	'23'),
('ALKEM INSTITUTION',	'Ethical',	'11'),
('BERGEN',	'Ethical',	'3'),
('ALKEM-ZURIEVE',	'Ethical',	'24'),
('INTENZA',	'Ethical',	'25'),
('ALPHA NEX',	'Ethical',	'1'),
('COSMOKEM',	'Ethical',	'26'),
('FORGEN',	'Ethical',	'27'),
('ALPHA MAX',	'Ethical',	'10'),
('MAXXIO',	'Generic',	'28'),
('ALKEM-METABOLICS',	'Ethical',	'29'),
('DERMAKEM',	'Ethical',	'30'),
('ALKEM IMPERIA',	'Ethical',	'35'),
('ACE-ALTIS',	'Ethical',	'33'),
('BERGEN NOVA',	'Ethical',	'36'),
('ALKEM UROCARE',	'Ethical',	'34'),
('ALKEM-DIABETOLOGY',	'Ethical',	'2'),
('DERMACARE',	'Ethical',	'5'),
('NOVOKEM',	'Generic',	'39'),
('ALKEM India',	'Ethical',	'40'),
('AURA MAGNA',	'Ethical',	'45'),
('CRITICA',	'Ethical',	'46'),
('ALKEM PULMOCARE',	'Ethical',	'47'),
('BERGEN CRISTA',	'Ethical',	'48'),
('FUTURA-NExX',	'Generic',	'49'),
('ALKEM GENERIC',	'Generic',	'60');

-- 2022-08-19 13:58:57.191382+05:30
