using System;

namespace Domain
{
    // Create a simple Domain entity(單元、實體)
    public class Value
    {
        // Auto implemented property
        public int Id { get; set; } //Using as primary key
        public string Name { get; set; }
    }
}
