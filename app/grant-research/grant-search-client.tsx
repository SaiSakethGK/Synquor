"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Grant {
  id: number;
  title: string;
  description: string;
  amount: string;
  deadline: string;
  type: string;
  eligibility: string;
  status: string;
  matchScore: number;
}

export default function GrantSearchClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [grants, setGrants] = useState<Grant[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filters, setFilters] = useState({
    type: {
      research: false,
      program: false,
      capacity: false,
      equipment: false,
    },
    amount: {
      under10k: false,
      "10k-50k": false,
      "50k-100k": false,
      over100k: false,
    },
    deadline: {
      within30days: false,
      "1-3months": false,
      "3+months": false,
      rolling: false,
    },
  });

  // Function to handle checkbox changes
  const handleCheckboxChange = (
    category: "type" | "amount" | "deadline",
    key: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: !prev[category][key as keyof typeof prev[category]],
      },
    }));
  };

  // Function to search grants
  const searchGrants = async () => {
    setLoading(true);
    setError("");

    try {
      // Build query parameters
      const params = new URLSearchParams();
      
      if (searchQuery) {
        params.append("query", searchQuery);
      }
      
      // Add type filters
      const activeTypes = Object.entries(filters.type)
        .filter(([_, isActive]) => isActive)
        .map(([type]) => type);
      
      if (activeTypes.length > 0) {
        params.append("type", activeTypes.join(","));
      }
      
      // Add amount filters
      const activeAmounts = Object.entries(filters.amount)
        .filter(([_, isActive]) => isActive)
        .map(([amount]) => amount);
      
      if (activeAmounts.length > 0) {
        params.append("amount", activeAmounts.join(","));
      }
      
      // Add deadline filters
      const activeDeadlines = Object.entries(filters.deadline)
        .filter(([_, isActive]) => isActive)
        .map(([deadline]) => deadline);
      
      if (activeDeadlines.length > 0) {
        params.append("deadline", activeDeadlines.join(","));
      }

      // Make API request
      const response = await fetch(`/api/grant-match?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch grants");
      }
      
      const data = await response.json();
      setGrants(data.grants);
    } catch (err) {
      setError("An error occurred while searching for grants. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Initial search on component mount
  useEffect(() => {
    searchGrants();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="md:col-span-1 space-y-6">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="font-medium mb-4">Filter Results</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Grant Type</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="research" 
                    checked={filters.type.research}
                    onCheckedChange={() => handleCheckboxChange("type", "research")}
                  />
                  <Label htmlFor="research">Research</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="program" 
                    checked={filters.type.program}
                    onCheckedChange={() => handleCheckboxChange("type", "program")}
                  />
                  <Label htmlFor="program">Program</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="capacity" 
                    checked={filters.type.capacity}
                    onCheckedChange={() => handleCheckboxChange("type", "capacity")}
                  />
                  <Label htmlFor="capacity">Capacity Building</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="equipment" 
                    checked={filters.type.equipment}
                    onCheckedChange={() => handleCheckboxChange("type", "equipment")}
                  />
                  <Label htmlFor="equipment">Equipment</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Funding Amount</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="amount1" 
                    checked={filters.amount.under10k}
                    onCheckedChange={() => handleCheckboxChange("amount", "under10k")}
                  />
                  <Label htmlFor="amount1">Under $10,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="amount2" 
                    checked={filters.amount["10k-50k"]}
                    onCheckedChange={() => handleCheckboxChange("amount", "10k-50k")}
                  />
                  <Label htmlFor="amount2">$10,000 - $50,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="amount3" 
                    checked={filters.amount["50k-100k"]}
                    onCheckedChange={() => handleCheckboxChange("amount", "50k-100k")}
                  />
                  <Label htmlFor="amount3">$50,000 - $100,000</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="amount4" 
                    checked={filters.amount.over100k}
                    onCheckedChange={() => handleCheckboxChange("amount", "over100k")}
                  />
                  <Label htmlFor="amount4">$100,000+</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Deadline</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="deadline1" 
                    checked={filters.deadline.within30days}
                    onCheckedChange={() => handleCheckboxChange("deadline", "within30days")}
                  />
                  <Label htmlFor="deadline1">Within 30 days</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="deadline2" 
                    checked={filters.deadline["1-3months"]}
                    onCheckedChange={() => handleCheckboxChange("deadline", "1-3months")}
                  />
                  <Label htmlFor="deadline2">1-3 months</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="deadline3" 
                    checked={filters.deadline["3+months"]}
                    onCheckedChange={() => handleCheckboxChange("deadline", "3+months")}
                  />
                  <Label htmlFor="deadline3">3+ months</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="deadline4" 
                    checked={filters.deadline.rolling}
                    onCheckedChange={() => handleCheckboxChange("deadline", "rolling")}
                  />
                  <Label htmlFor="deadline4">Rolling</Label>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full mt-4" 
              onClick={searchGrants}
              disabled={loading}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
      
      <div className="md:col-span-3">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1">
            <Input 
              type="text" 
              placeholder="Search grants by keyword, focus area, or organization type..." 
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchGrants()}
            />
          </div>
          <Button onClick={searchGrants} disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </Button>
        </div>
        
        {error && (
          <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="space-y-6">
            {grants.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No grants found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or filters to find more results.
                </p>
              </div>
            ) : (
              <>
                {grants.map((grant) => (
                  <div key={grant.id} className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{grant.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded text-xs font-medium ${
                          grant.status === "Open" 
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" 
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                        }`}>
                          {grant.status}
                        </span>
                        <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded text-xs font-medium">
                          {grant.matchScore}% Match
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {grant.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Amount:</p>
                        <p className="font-medium">{grant.amount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Deadline:</p>
                        <p className="font-medium">{grant.deadline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Type:</p>
                        <p className="font-medium">{grant.type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Eligibility:</p>
                        <p className="font-medium">{grant.eligibility}</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button variant="outline">View Details</Button>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-center mt-8">
                  <Button variant="outline" className="mr-2" disabled>Previous</Button>
                  <Button variant="outline" disabled>Next</Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 