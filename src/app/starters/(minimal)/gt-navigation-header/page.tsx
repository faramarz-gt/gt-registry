import { GTNavigationHeader } from "@/components/gt-navigation-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function GTNavigationHeaderPage() {
  return (
    <div className="min-h-screen bg-background">
      <GTNavigationHeader />
      
      <main className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="mb-4">
              GTreasury Navigation System
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              GT - Navigation Header
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete navigation header with GTreasury branding, featuring logo placement, 
              8 treasury-focused navigation items, search functionality, and user management.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">GTreasury Logo</CardTitle>
                <CardDescription>
                  Prominent brand placement on the left side
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clickable logo that serves as home navigation with consistent GTreasury branding.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Treasury Navigation</CardTitle>
                <CardDescription>
                  8 key treasury management sections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Dashboard</li>
                  <li>• Treasury</li>
                  <li>• Cash Management</li>
                  <li>• Risk Management</li>
                  <li>• Payments</li>
                  <li>• Reporting</li>
                  <li>• Analytics</li>
                  <li>• Administration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Search & User Menu</CardTitle>
                <CardDescription>
                  Right-aligned search and user options
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Global search functionality with notifications and user profile dropdown menu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Responsive Design</CardTitle>
                <CardDescription>
                  Mobile-first approach
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Collapsible navigation for mobile devices with hamburger menu integration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sticky Header</CardTitle>
                <CardDescription>
                  Always accessible navigation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fixed header that stays visible during scrolling with backdrop blur effect.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Theme Integration</CardTitle>
                <CardDescription>
                  GTreasury design system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fully integrated with GTreasury color tokens and design system.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Usage Example */}
          <Card>
            <CardHeader>
              <CardTitle>Implementation</CardTitle>
              <CardDescription>
                This navigation header is ready to use in your GTreasury applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm">
                  <code>{`import { GTNavigationHeader } from "@/components/gt-navigation-header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <GTNavigationHeader />
      <main>{children}</main>
    </div>
  );
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 