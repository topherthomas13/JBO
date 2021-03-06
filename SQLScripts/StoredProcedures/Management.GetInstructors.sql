USE [JBO]
GO
/****** Object:  StoredProcedure [Management].[GetInstructors]    Script Date: 3/26/2018 6:48:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [Management].[GetInstructors]
(
	@id INT = NULL
)
AS
BEGIN
	SELECT Id, FullName, IsActive
	FROM Management.Instructors
	WHERE ISNULL(@id, id) = id
END


-- CRUD for Projects
