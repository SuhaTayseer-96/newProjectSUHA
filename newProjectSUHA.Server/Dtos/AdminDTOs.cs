﻿namespace newProjectSUHA.Server.Dtos
{
    // ClassAndGym DTO
    public class ClassAndGymDto
    {
      
        public string? Name { get; set; }
        public string? Trainer { get; set; }
        public string? Description { get; set; }
        public decimal? Price { get; set; }
        public string? Flag { get; set; }
        public string? Image { get; set; }
    }

    // Subscription DTO
    public class SubscriptionDto
    {
        public string? Duration { get; set; }
        public decimal? FinalPrice { get; set; }
        public int? ClassId { get; set; }
    }

    // AvailableTime DTO
    public class AvailableTimeDto
    {
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public int? ClassId { get; set; }
    }


}