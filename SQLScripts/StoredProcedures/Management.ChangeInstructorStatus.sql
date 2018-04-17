USE [JBO]
GO
/****** Object:  StoredProcedure [Management].[DeleteInstructor]    Script Date: 4/11/2018 11:40:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [Management].[ChangeInstructorStatus]
(
	@id INT
	, @isActive BIT
)
AS
BEGIN
	UPDATE Management.Instructors
	SET IsActive = @isActive
	WHERE id = @id
END

