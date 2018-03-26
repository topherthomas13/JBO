USE [JBO]
GO
/****** Object:  StoredProcedure [Management].[DeleteInstructor]    Script Date: 3/26/2018 6:47:35 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [Management].[DeleteInstructor]
(
	@id INT
)
AS
BEGIN
	UPDATE Management.Instructors
	SET IsActive = 0
	WHERE id = @id
END

