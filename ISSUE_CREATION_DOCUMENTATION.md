# GitHub Issue Creation Documentation

## Problem Statement Summary

The task requests the creation of GitHub issues for 4 categories with sub-issues:

1. **MINDSET** (6 objectives)
   - Empathy
   - Grit
   - Desire To Grow
   - Altruism
   - Vulnerability
   - Reflection

2. **KNOWLEDGE** (6 objectives)
   - Research
   - Writing
   - Critical Reading
   - Applied Mathematics
   - Scientific Inquiry
   - Information Literacy

3. **CREATIVITY** (6 objectives)
   - Curiosity
   - Synthesis
   - Ideation
   - Iteration
   - Risk Taking
   - Collaboration

4. **SKILLS** (6 objectives)
   - Passion
   - Leadership
   - Ownership
   - Communication
   - Management
   - Critical Thinking

Each sub-issue should be titled: "Write a blurb on [objective]" and set to "todo" status.

## Limitation: Cannot Create GitHub Issues via Automation

**Important:** The GitHub Copilot Agent environment does not have the capability to create GitHub issues programmatically. This is by design for security reasons.

### Disallowed MCP Tools and Actions

Based on the environment limitations, the following GitHub-related actions are **NOT ALLOWED**:

1. **Cannot create new GitHub issues**
2. **Cannot update existing issues** (description, assignees, labels, etc.)
3. **Cannot update PR descriptions directly** (except via report_progress tool)
4. **Cannot open new PRs**
5. **Cannot pull branches from GitHub**
6. **Cannot commit or push code directly using `git` or `gh` commands** (must use report_progress tool)
7. **Cannot clone any repos**
8. **Cannot use `git reset`** (force push not available)
9. **Cannot use `git rebase`** (force push not available)
10. **Cannot push changes to repos other than the current one**
11. **Cannot access files in the .github/agents directory**

### Available GitHub MCP Tools (Read-Only)

The available GitHub MCP tools are primarily for **reading** information:

- `github-mcp-server-list_issues` - List issues in a repository
- `github-mcp-server-issue_read` - Get information about specific issues
- `github-mcp-server-get_code_scanning_alert` - Get code scanning alerts
- `github-mcp-server-get_secret_scanning_alert` - Get secret scanning alerts
- `github-mcp-server-list_pull_requests` - List pull requests
- `github-mcp-server-pull_request_read` - Read pull request information
- `github-mcp-server-search_*` - Various search operations
- And many other read-only operations

**None of these tools allow creating or modifying issues.**

## Recommended Approach

### Option 1: Manual Creation

The issues should be created manually through the GitHub web interface:

1. Create 4 parent issues with titles:
   - "Mindset"
   - "Knowledge"
   - "Creativity"
   - "Skills"

2. For each parent issue, create 6 sub-issues with titles following the pattern:
   - "Write a blurb on [objective name]"

3. Set all issues to "todo" status

### Option 2: GitHub API Script (Outside This Environment)

A script could be created using the GitHub API or GitHub CLI that could be run outside this environment with appropriate credentials:

```bash
# Example using GitHub CLI (gh)
# Note: This cannot be run in the current environment

# Create parent issue for Mindset
gh issue create --title "Mindset" --body "" --label "todo"

# Create sub-issues
gh issue create --title "Write a blurb on Empathy" --body "" --label "todo"
gh issue create --title "Write a blurb on Grit" --body "" --label "todo"
# ... and so on
```

### Option 3: GitHub Actions Workflow

A GitHub Actions workflow could be created that runs the issue creation script when triggered manually or on specific events.

## Complete Issue Structure

### MINDSET Category
- Parent: "Mindset"
  - Sub: "Write a blurb on Empathy"
  - Sub: "Write a blurb on Grit"
  - Sub: "Write a blurb on Desire To Grow"
  - Sub: "Write a blurb on Altruism"
  - Sub: "Write a blurb on Vulnerability"
  - Sub: "Write a blurb on Reflection"

### KNOWLEDGE Category
- Parent: "Knowledge"
  - Sub: "Write a blurb on Research"
  - Sub: "Write a blurb on Writing"
  - Sub: "Write a blurb on Critical Reading"
  - Sub: "Write a blurb on Applied Mathematics"
  - Sub: "Write a blurb on Scientific Inquiry"
  - Sub: "Write a blurb on Information Literacy"

### CREATIVITY Category
- Parent: "Creativity"
  - Sub: "Write a blurb on Curiosity"
  - Sub: "Write a blurb on Synthesis"
  - Sub: "Write a blurb on Ideation"
  - Sub: "Write a blurb on Iteration"
  - Sub: "Write a blurb on Risk Taking"
  - Sub: "Write a blurb on Collaboration"

### SKILLS Category
- Parent: "Skills"
  - Sub: "Write a blurb on Passion"
  - Sub: "Write a blurb on Leadership"
  - Sub: "Write a blurb on Ownership"
  - Sub: "Write a blurb on Communication"
  - Sub: "Write a blurb on Management"
  - Sub: "Write a blurb on Critical Thinking"

## Total: 28 Issues
- 4 parent issues (one per category)
- 24 sub-issues (6 per category)
