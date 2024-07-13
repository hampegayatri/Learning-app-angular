import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;

  beforeEach(() => {
    component = new UserComponent(); // Initialize the component
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Basic test to ensure component creation
  });

  it('should reset user name', () => {
    // Arrange: Set up initial state
    component.userName = 'John Doe';

    // Act: Call the method to be tested
    component.resetName();

    // Assert: Check if the userName property is reset
    expect(component.userName).toBe('');
  });
});
