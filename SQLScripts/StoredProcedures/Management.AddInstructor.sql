USE [JBO]
GO
/****** Object:  StoredProcedure [Management].[AddInstructor]    Script Date: 3/26/2018 6:46:44 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [Management].[AddInstructor]
(
	@FullName VARCHAR(200)
)
AS
BEGIN
	INSERT INTO Management.Instructors
	(FullName, IsActive)
	SELECT @FullName, 1
END

