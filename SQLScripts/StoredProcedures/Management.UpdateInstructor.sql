USE [JBO]
GO
/****** Object:  StoredProcedure [Management].[UpdateInstructor]    Script Date: 3/26/2018 6:48:30 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [Management].[UpdateInstructor]
(
	@id INT
	, @FullName VARCHAR(200)
)
AS
BEGIN
	UPDATE Management.Instructors
	SET FullName = @FullName
	WHERE id = @id
END

