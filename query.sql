-- Write an SQL query that selects all records from the USER_DATA table above
--  where SENT is 'N' and theBIRTH_DATE is more than 25 years ago.

SELECT * FROM USER_DATA WHERE SENT='N' AND EXTRACT(YEAR
              FROM age(CURRENT_DATE, birth_date)) > 25