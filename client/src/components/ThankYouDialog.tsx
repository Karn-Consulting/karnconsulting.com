import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Clock } from "lucide-react";

interface ThankYouDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  leadName?: string;
  leadEmail?: string;
}

export function ThankYouDialog({ 
  open, 
  onOpenChange, 
  leadName = "",
  leadEmail = ""
}: ThankYouDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-thank-you">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Thank You, {leadName ? leadName.split(" ")[0] : ""}!
          </DialogTitle>
          <DialogDescription className="text-center space-y-4 pt-4">
            <p className="text-base">
              Your inquiry has been successfully received.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg p-4 space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div className="text-left">
                  <p className="font-medium text-foreground">Check your email</p>
                  <p className="text-sm text-muted-foreground">
                    We've sent a confirmation to {leadEmail}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div className="text-left">
                  <p className="font-medium text-foreground">What's next?</p>
                  <p className="text-sm text-muted-foreground">
                    Our AI experts will review your inquiry and reach out within 24 hours with tailored solutions
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground pt-2">
              Meanwhile, feel free to explore our case studies and see how we've helped other companies transform with AI.
            </p>
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          <Button 
            onClick={() => onOpenChange(false)}
            className="w-full"
            data-testid="button-close-thank-you"
          >
            Continue Exploring
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}